package com.company.chattry.view.messageviewdialog;


import com.company.chattry.entity.Message;
import com.company.chattry.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.Route;
import io.jmix.core.FileRef;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.component.textarea.JmixTextArea;
import io.jmix.flowui.component.textfield.TypedTextField;
import io.jmix.flowui.download.Downloader;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.DataContext;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import static io.jmix.flowui.component.UiComponentUtils.getView;

@Route(value = "message-view-dialog", layout = MainView.class)
@ViewController(id = "MessageViewDialog")
@ViewDescriptor(path = "message-view-dialog.xml")
public class MessageViewDialog extends StandardView {
    @ViewComponent
    private TypedTextField<Object> sentAt;
    @ViewComponent
    private JmixTextArea messageContent;
    @ViewComponent
    private TypedTextField<Object> senderName;
    @ViewComponent
    private JmixButton downloadAttachmentBtn;
    @Autowired
    private Downloader downloader;

    FileRef fileRef1 = null ;
    @Autowired
    private Notifications notifications;

    public void setMessage(Message message) {
        messageContent.setValue(message.getContent());
        senderName.setValue("Da: " + message.getSender().getFirstName());
        sentAt.setValue(message.getSentAt().toString());
        if(message.getRl().equalsIgnoreCase("R")){
            message.setRl("L");
        }
        FileRef fileRef = message.getAttachment();
        fileRef1 = fileRef;
        if(message.getAttachment() != null){
            downloadAttachmentBtn.setText(message.getAttachment().getFileName());
            downloadAttachmentBtn.setVisible(true);
        }

    }

    @Subscribe(id = "downloadAttachmentBtn", subject = "clickListener")
    public void onDownloadAttachmentBtnClick(final ClickEvent<JmixButton> event) {
        if(fileRef1 != null){
            downloader.download(fileRef1);
            notifications.create("Aprendo "+fileRef1.toString()).withPosition(Notification.Position.TOP_END).show();
        }else {
            notifications.create("Non è stata trovata una rappresentazione per uqesto file").withPosition(Notification.Position.TOP_END).show();
        }

    }

}