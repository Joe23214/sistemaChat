package com.company.chattry.app;

import com.company.chattry.view.main.MainView;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.UIDetachedException;
import io.jmix.core.DataManager;
import io.jmix.core.UnconstrainedDataManager;
import io.jmix.core.security.SystemAuthenticator;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Consumer;

@Service
public class MessageNotifierService {

    private final DataManager dataManager;
    private final UnconstrainedDataManager unconstrainedDataManager;
    private final SystemAuthenticator systemAuthenticator;
    private final Map<UUID, MainView> activeMainViews = new ConcurrentHashMap<>();
    private final Map<UUID, Long> previousUnreadCounts = new ConcurrentHashMap<>();

    public MessageNotifierService(DataManager dataManager,
                                  SystemAuthenticator systemAuthenticator,
                                  UnconstrainedDataManager unconstrainedDataManager) {
        this.dataManager = dataManager;
        this.systemAuthenticator = systemAuthenticator;
        this.unconstrainedDataManager = unconstrainedDataManager;
    }

    public void registerMainView(UUID userId, MainView mainView) {
        activeMainViews.put(userId, mainView);
    }

    public void unregisterMainView(UUID userId) {
        activeMainViews.remove(userId);
    }

    public void notifyUser(UUID userId, String senderName) {
        MainView mainView = activeMainViews.get(userId);
        if (mainView != null) {
            mainView.sendNewMessageNotification(senderName);
        }
    }

    public void updateMessageCounter(UUID userId) {
        MainView mainView = activeMainViews.get(userId);
        if (mainView != null) {
            mainView.refreshUnreadCount();
        }
    }

    public long loadUnreadMessageCount(UUID userId) {
        LocalDateTime now = LocalDateTime.now();
        return dataManager.loadValue(
                        "select count(m) from Message m " +
                                "where m.reciver.id = :userId " +
                                "and lower(m.rl) = 'r' " +
                                "and m.sentAt <= :now",
                        Long.class)
                .parameter("userId", userId)
                .parameter("now", now)
                .one();
    }

    public String getLastSenderName(UUID userId) {
        LocalDateTime now = LocalDateTime.now();
        return unconstrainedDataManager.loadValue(
                        "select m.sender.username from Message m " +
                                "where m.reciver.id = :userId " +
                                "and lower(m.rl) = 'r' " +
                                "and m.sentAt <= :now " +
                                "order by m.sentAt desc",
                        String.class)
                .parameter("userId", userId)
                .parameter("now", now)
                .optional()
                .orElse("Sconosciuto");
    }

    @Scheduled(fixedDelay = 60000)
    public void periodicUnreadMessagesCheck() {
        systemAuthenticator.withSystem(() -> {
            for (UUID userId : activeMainViews.keySet()) {
                MainView mainView = activeMainViews.get(userId);
                if (mainView != null) {
                    long currentUnreadCount = loadUnreadMessageCount(userId);
                    long previousCount = previousUnreadCounts.getOrDefault(userId, 0L);

                    if (currentUnreadCount > previousCount) {
                        String senderName = getLastSenderName(userId);
                        safelyAccessUI(userId, ui -> {
                            mainView.sendNewMessageNotification(senderName);
                            mainView.updateNotificationCount(currentUnreadCount);
                        });
                    }

                    previousUnreadCounts.put(userId, currentUnreadCount);
                }
            }
            return null;
        });
    }

    private void safelyAccessUI(UUID userId, Consumer<UI> uiAction) {
        MainView mainView = activeMainViews.get(userId);
        if (mainView != null) {
            mainView.getUI().ifPresent(ui -> {
                if (ui.isAttached()) {
                    try {
                        ui.access(() -> uiAction.accept(ui));
                    } catch (UIDetachedException e) {
                        activeMainViews.remove(userId);
                    }
                } else {
                    activeMainViews.remove(userId);
                }
            });
        }
    }
}
