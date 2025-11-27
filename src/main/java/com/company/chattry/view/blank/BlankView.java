package com.company.chattry.view.blank;


import com.company.chattry.app.MessageNotifierService;
import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;
import com.company.chattry.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.Route;
import io.jmix.core.DataManager;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.ViewNavigators;
import io.jmix.flowui.component.UiComponentUtils;
import io.jmix.flowui.component.checkbox.JmixCheckbox;
import io.jmix.flowui.component.combobox.EntityComboBox;
import io.jmix.flowui.component.combobox.JmixComboBox;
import io.jmix.flowui.component.datepicker.TypedDatePicker;
import io.jmix.flowui.component.datetimepicker.TypedDateTimePicker;
import io.jmix.flowui.component.textarea.JmixTextArea;
import io.jmix.flowui.component.timepicker.TypedTimePicker;
import io.jmix.flowui.component.upload.FileStorageUploadField;
import io.jmix.flowui.component.valuepicker.EntityPicker;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.model.InstanceContainer;
import io.jmix.flowui.model.InstanceLoader;
import io.jmix.flowui.view.*;
import io.jmix.flowui.view.navigation.ViewNavigator;
import org.springframework.beans.factory.annotation.Autowired;
import com.company.chattry.view.message.MessageListView;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.UUID;

//@Route(value = "newMessage", layout = MainView.class)
@ViewController(id = "BlankView")
@ViewDescriptor(path = "blank-view.xml")
public class BlankView extends StandardView {
    @ViewComponent
    private EntityPicker<User> senderField;
    @ViewComponent
    private JmixCheckbox timeProgrammer;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @ViewComponent
    private JmixTextArea contentField;
    @Autowired
    private Notifications notifications;
    @ViewComponent
    private EntityComboBox<User> reciverComboBox;
    @ViewComponent
    private TypedDatePicker<Comparable> sentDateField;
    @Autowired
    private DataManager dataManager;
    @ViewComponent
    private TypedTimePicker<Comparable> sentTimeField;
    @ViewComponent
    private CollectionLoader<User> usersDl;
    @ViewComponent
    private InstanceLoader<Message> messageDl;
    @ViewComponent
    private FileStorageUploadField allegatoField;

    @Subscribe
    public void onInit(final InitEvent event) {
        senderField.setVisible(false);
        senderField.setValue((User) currentAuthentication.getUser());
        sentDateField.setVisible(false);
        sentTimeField.setVisible(false);
        sentDateField.setValue(LocalDate.now());
        sentTimeField.setValue(LocalTime.now());
        timeProgrammer.setValue(false);

    }

    @Subscribe
    public void onBeforeClose(final BeforeCloseEvent event) {
        getContent().getElement().getClassList().clear();
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
        message.setContent(contentField.getValue());
        message.setReciver(reciverComboBox.getValue());
        message.setSender(senderField.getValue());
        message.setSentAt(LocalDateTime.of(date, time));
        message.setRl("R");
        message.setAttachment(allegatoField.getValue());
        dataManager.save(message);
        notifications.create("Hai inviato il tuo messaggio con successo! ").withPosition(Notification.Position.TOP_END).show();
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

    @Subscribe
    public void onBeforeShow(BeforeShowEvent event) {
        User currentUser = (User) currentAuthentication.getUser();
        usersDl.setParameter("currentUserId", currentUser.getId());
        usersDl.load();
    }

}