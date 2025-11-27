package com.company.chattry.view.conversationlist;

import com.company.chattry.app.MessageNotifierService;
import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;
import com.company.chattry.view.conversationpage.ConversationPage;
import com.company.chattry.view.main.MainView;
import com.company.chattry.view.messageviewdialog.MessageViewDialog;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.grid.ItemClickEvent;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.Route;
import io.jmix.core.DataManager;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.component.UiComponentUtils;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.CollectionContainer;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Route(value = "conversationList", layout = MainView.class)
@ViewController(id = "Conversationlist")
@ViewDescriptor(path = "conversationList.xml")
public class Conversationlist extends StandardView implements BeforeEnterObserver {

    @ViewComponent
    private CollectionContainer<Message> messagesDc;

    @ViewComponent
    private CollectionLoader<Message> messagesDl;

    @Autowired
    private CurrentAuthentication currentAuthentication;

    @Autowired
    private Notifications notifications;
    @ViewComponent
    private DataGrid<Message> messagesTable;
    @Autowired
    private DialogWindows dialogWindows;
    @Autowired
    private DataManager dataManager;
    private UUID receiverId;
    private UUID senderId;
    @Autowired
    private MessageNotifierService messageNotifierService;

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        String receiverIdStr = event.getRouteParameters().get("receiverId").orElse(null);
        String senderIdStr = event.getRouteParameters().get("senderId").orElse(null);

        if (receiverIdStr == null || senderIdStr == null) {
            notifications.create("Utenti non ricevuti").show();
            return;
        }

        try {
            receiverId = UUID.fromString(receiverIdStr);
            senderId = UUID.fromString(senderIdStr);
        } catch (IllegalArgumentException e) {
            notifications.create("Parametri UUID non validi").show();
            return;
        }

        loadMessages();
    }

    private void loadMessages() {
        messagesDl.setParameter("receiverId", receiverId);
        messagesDl.setParameter("senderId", senderId);
        messagesDl.setParameter("now", LocalDateTime.now());
        messagesDl.load();
    }
    public void setOtherUserId(UUID receiverId, UUID senderId) {
        if (receiverId == null || senderId == null) {
            notifications.create("utenti non ricevuti").show();
            return;
        }
        messagesDl.setParameter("receiverId", receiverId);
        messagesDl.setParameter("senderId", senderId);
        messagesDl.setParameter("now", LocalDateTime.now());


        messagesDl.load();
    }
    public void navigateToMessageListView() {
        UI.getCurrent().navigate("messages");
    }
    @Subscribe(id = "close", subject = "clickListener")
    public void onCloseClick(final ClickEvent<JmixButton> event) {
        notifications.create("Sei tornato alle tue ultime conversazioni!").withPosition(Notification.Position.TOP_END).show();
        navigateToMessageListView();
        closeWithDefaultAction();
    }

    @Subscribe("messagesTable")
    public void onMessagesTableItemClick(final ItemClickEvent<Message> event) {
        Message selectedMessage = event.getItem();
        if (selectedMessage != null) {
            if ("R".equals(selectedMessage.getRl())) {
                selectedMessage.setRl("L");
                dataManager.save(selectedMessage);

                User user = (User) currentAuthentication.getUser();
                messageNotifierService.updateMessageCounter(user.getId());
            }


            DialogWindow<MessageViewDialog> dialog = dialogWindows.view(this, MessageViewDialog.class).build();
            dialog.addThemeName("custom-position-large");
            dialog.setDraggable(true);
            dialog.setResizable(true);

            MessageViewDialog dialogView = dialog.getView();
            dialogView.setMessage(selectedMessage);

            dialog.setModal(false);
            dialog.setCloseOnOutsideClick(false);
            dialog.open();

            messagesDl.load();
        }
    }
    @Subscribe
    public void onInit(InitEvent event) {
        DataGrid.Column<Message> statusCol = messagesTable.addColumn(message -> {
            if (message.getRl() == null) {
                message.setRl("R");
            }
            return "R".equalsIgnoreCase(message.getRl()) ? "🔴" : "🟢";
        });
        statusCol.setHeader("Ricevuto/letto");
        statusCol.setSortable(true);
        statusCol.setResizable(false);
        statusCol.setAutoWidth(true);
        statusCol.setFlexGrow(0);
        statusCol.setWidth("40px");
    }




}
