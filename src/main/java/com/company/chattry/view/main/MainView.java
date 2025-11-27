package com.company.chattry.view.main;

import com.company.chattry.app.MessageNotifierService;
import com.company.chattry.entity.User;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.Route;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.Dialogs;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.app.main.StandardMainView;
import io.jmix.flowui.component.main.JmixUserIndicator;
import io.jmix.flowui.component.textfield.TypedTextField;
import io.jmix.flowui.model.InstanceLoader;
import io.jmix.flowui.view.*;

import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.UUID;

@Route("")
@ViewController(id = "MainView")
@ViewDescriptor(path = "main-view.xml")
public class MainView extends StandardMainView {

    @ViewComponent
    private Icon notificationIcon;
    @ViewComponent
    private TypedTextField<Object> notificationCount;
    @ViewComponent
    private InstanceLoader<User> userDl;

    @Autowired
    private Dialogs dialogs;
    @Autowired
    private Notifications notifications;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @Autowired
    private MessageNotifierService messageNotifierService;

    @Subscribe
    public void onBeforeShow(BeforeShowEvent event) {
        User currentUser = (User) currentAuthentication.getUser();
        //updateLastSeen(currentUser);
        userDl.setParameter("currentUserId", currentUser.getId());
        userDl.load();
        messageNotifierService.registerMainView(currentUser.getId(), this);

    }

    @Subscribe
    public void onInit(InitEvent event) {
        User currentUser = (User) currentAuthentication.getUser();
        UUID currentUserId = currentUser.getId();
        messageNotifierService.registerMainView(currentUserId, this);

        long unreadCount = messageNotifierService.loadUnreadMessageCount(currentUserId);
        updateNotificationCount(unreadCount);
    }

    public void updateNotificationCount(long count) {
        if (count > 0) {
            notificationCount.getElement().getClassList().add("notification-count");
            notificationCount.setValue(String.valueOf(count));
            notificationIcon.getElement().getClassList().add("unread");
        } else {
            notificationCount.getElement().getClassList().remove("notification-count");
            notificationCount.setValue("");
            notificationIcon.getElement().getClassList().remove("unread");
        }
    }

    public void sendNewMessageNotification(String senderName) {
        String text = notificationCount.getValue();
        long count = text.isEmpty() ? 0 : Long.parseLong(text);
        updateNotificationCount(count + 1);

        notifications.create("Nuovo messaggio da: " + senderName)
                .withPosition(Notification.Position.TOP_CENTER)
                .withDuration(5000)
                .show();

        notifications.create("Hai " + (count + 1) + " messaggi da leggere!")
                .withPosition(Notification.Position.TOP_START)
                .withDuration(5000)
                .show();
    }

    @Subscribe(id = "notificationIcon", subject = "clickListener")
    public void onNotificationIconClick(final ClickEvent<Icon> event) {
        User currentUser = (User) currentAuthentication.getUser();
        UUID currentUserId = currentUser.getId();

        long unreadCount = messageNotifierService.loadUnreadMessageCount(currentUserId);

        if (unreadCount > 0) {
            dialogs.createMessageDialog()
                    .withHeader("Nuovo messaggio")
                    .withText("Hai ricevuto " + unreadCount + " messaggi!")
                    .withCloseOnOutsideClick(true)
                    .open();
        } else {
            dialogs.createMessageDialog()
                    .withHeader("Messaggio")
                    .withText("Non ci sono nuovi messaggi!")
                    .withCloseOnOutsideClick(true)
                    .open();
        }

        updateNotificationCount(unreadCount);
    }

    public void refreshUnreadCount() {
        User currentUser = (User) currentAuthentication.getUser();
        UUID currentUserId = currentUser.getId();

        long unreadCount = messageNotifierService.loadUnreadMessageCount(currentUserId);
        updateNotificationCount(unreadCount);
    }

    @Subscribe(id = "profileIcon", subject = "clickListener")
    public void onProfileIconClick(final ClickEvent<Icon> event) {
        UI.getCurrent().navigate("profile-view");
    }

    @PreDestroy
    public void onDestroy() {
        User currentUser = (User) currentAuthentication.getUser();
        messageNotifierService.unregisterMainView(currentUser.getId());
    }

    private void updateLastSeen(User user) {
        if (user != null) {
            user.setLastSeen(LocalDateTime.now());
            userDl.getDataContext().save();
        }
    }
}
