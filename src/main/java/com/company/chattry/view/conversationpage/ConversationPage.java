package com.company.chattry.view.conversationpage;


import com.company.chattry.app.MessageNotifierService;
import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;
import com.company.chattry.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.Route;
import io.jmix.core.DataManager;
import io.jmix.core.Metadata;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.Dialogs;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.component.checkbox.JmixCheckbox;
import io.jmix.flowui.component.combobox.EntityComboBox;
import io.jmix.flowui.component.datepicker.TypedDatePicker;
import io.jmix.flowui.component.datetimepicker.TypedDateTimePicker;
import io.jmix.flowui.component.textarea.JmixTextArea;
import io.jmix.flowui.component.timepicker.TypedTimePicker;
import io.jmix.flowui.component.upload.FileStorageUploadField;
import io.jmix.flowui.component.valuepicker.EntityPicker;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.CollectionContainer;
import io.jmix.flowui.model.InstanceContainer;
import io.jmix.flowui.model.InstanceLoader;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Optional;
import java.util.UUID;

@Route(value = "conversation-page/:id", layout = MainView.class)  // route con parametro id
@ViewController("ConversationPage")
@ViewDescriptor("conversation-page.xml")
@EditedEntityContainer("messageDc")  // container di editing
public class ConversationPage extends StandardView implements BeforeEnterObserver {

    @ViewComponent
    private InstanceLoader<Message> messageDl;

    @ViewComponent
    private InstanceContainer<Message> messageDc;

    @Autowired
    private Metadata metadata;

    @ViewComponent
    private EntityPicker<User> senderField;
    @ViewComponent
    private JmixCheckbox timeProgrammer;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @Autowired
    private Notifications notifications;
    @ViewComponent
    private EntityComboBox<User> reciverComboBox;
    @Autowired
    private DataManager dataManager;
    @ViewComponent
    private JmixTextArea contentFieldW;
    @ViewComponent
    private TypedDatePicker<Comparable> sentDateField;
    @ViewComponent
    private Span contentMsg;
    @ViewComponent
    private TypedTimePicker<Comparable> sentTimeField;
    @Autowired
    private MessageNotifierService messageNotifierService;
    @ViewComponent
    private CollectionContainer<User> usersDc;
    @ViewComponent
    private FileStorageUploadField allegatoField;
    @ViewComponent
    private JmixButton attachment;


    public void setMessageId(UUID id) {
        messageDl.setEntityId(id);
        messageDl.addPostLoadListener(e -> {
            Message message = messageDc.getItem();
            if (message != null) {
                contentMsg.setText(message.getContent());
                contentFieldW.setValue("");
            }
        });
        messageDl.load();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        Optional<String> idOptional = event.getRouteParameters().get("id");

        if (idOptional.isPresent()) {
            try {
                UUID messageId = UUID.fromString(idOptional.get());
                messageDl.setEntityId(messageId);
                messageDl.load();
                Message message = messageDc.getItem();
                contentMsg.setText(message.getContent());
                contentFieldW.setValue("");
            } catch (IllegalArgumentException e) {
                showNewMessage();
            }
        } else {
            showNewMessage();
        }
    }

    private void showNewMessage() {
        Message newMessage = metadata.create(Message.class);
        messageDc.setItem(newMessage);
    }

    @Subscribe
    public void onInit(final InitEvent event) {
        senderField.setVisible(false);
        senderField.setValue((User) currentAuthentication.getUser());
        sentDateField.setVisible(false);
        sentTimeField.setVisible(false);
        sentDateField.setValue(LocalDate.now());
        sentTimeField.setValue(LocalTime.now());
        timeProgrammer.setValue(false);
        reciverComboBox.setVisible(false);
        contentFieldW.setValue("");
    }

    @Subscribe
    public void onBeforeShow(final BeforeShowEvent event) {
        Message message = messageDc.getItem();
        User otherUser = message.getReciver();
        reciverComboBox.setValue(otherUser);

        if (message.getAttachment() != null) {
            attachment.setVisible(true);
            attachment.setText(message.getAttachment().getFileName());
        } else {
            attachment.setVisible(false);
        }
    }

    @Subscribe(id = "timeProgrammer", subject = "clickListener")
    public void onTimeProgrammerClick(final ClickEvent<JmixCheckbox> event) {
        if(timeProgrammer.getValue().equals(true) ){
            sentDateField.setVisible(true);
            sentTimeField.setVisible(true);
            sentDateField.setValue(LocalDate.now());
            sentTimeField.setValue(LocalTime.now());
            notifications.create("ora puoi impostare la data e l'ora di invio! ")
                    .withPosition(Notification.Position.TOP_END).show();
        }else{
            sentDateField.setVisible(false);
            sentTimeField.setVisible(false);
            sentDateField.setValue(LocalDate.now());
            sentTimeField.setValue(LocalTime.now());
            notifications.create("il messaggio verrà inviato in tempo reale!")
                    .withPosition(Notification.Position.TOP_END).show();

        }
    }

    @Subscribe(id = "invia", subject = "clickListener")
    public void onInviaClick(final ClickEvent<JmixButton> event) {
        Message message = new Message();
        LocalDate date = sentDateField.getValue();
        LocalTime time = sentTimeField.getValue();
        message.setId(UUID.randomUUID());
        message.setContent(contentFieldW.getValue());
        message.setReciver(reciverComboBox.getValue());
        message.setSender(senderField.getValue());
        message.setSentAt(LocalDateTime.of(date, time));
        message.setRl("R");
        message.setAttachment(allegatoField.getValue());
        dataManager.save(message);
        notifications.create("Hai inviato il tuo messaggio con successo! ").withPosition(Notification.Position.TOP_END).show();
        contentFieldW.setValue("");
        navigateToMessageListView();
        closeWithDefaultAction();

    }
    public void navigateToMessageListView() {
        UI.getCurrent().navigate("messages");
    }

    @Subscribe(id = "closeButton", subject = "clickListener")
    public void onCloseButtonClick(final ClickEvent<JmixButton> event) {
        notifications.create("Il tuo messaggio non è stato inviato,Sei tornato alla pagina dei messaggi!").withPosition(Notification.Position.TOP_END).show();
        navigateToMessageListView();
        closeWithDefaultAction();
    }

    @Subscribe(id = "attachment", subject = "clickListener")
    public void onAttachmentClick(final ClickEvent<JmixButton> event) {
        UI.getCurrent().navigate("profile-view");
    }

}
