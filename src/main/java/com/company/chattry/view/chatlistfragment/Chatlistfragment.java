package com.company.chattry.view.chatlistfragment;

import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;

import com.company.chattry.view.conversationlist.Conversationlist;
import com.company.chattry.view.conversationpage.ConversationPage;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import io.jmix.core.FileRef;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.component.UiComponentUtils;
import io.jmix.flowui.download.Downloader;
import io.jmix.flowui.fragment.FragmentDescriptor;
import io.jmix.flowui.fragmentrenderer.FragmentRenderer;
import io.jmix.flowui.fragmentrenderer.RendererItemContainer;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.InstanceContainer;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.Optional;

@FragmentDescriptor("ChatListFragment.xml")
@RendererItemContainer("item")
public class Chatlistfragment extends FragmentRenderer<VerticalLayout, Message> {
    @ViewComponent
    private InstanceContainer<Message> item;
    @Autowired
    private DialogWindows dialogWindows;
    @ViewComponent
    private Span unreadLabel;
    @ViewComponent
    private JmixButton attachment;
    @ViewComponent
    private Icon onlineIcon;
    @ViewComponent
    private Span onlineStatusLabel;
    @Autowired
    private Downloader downloader;

    @Subscribe(target = Target.HOST_CONTROLLER)
    public void onHostBeforeShow(final View.BeforeShowEvent event) {
        updateUnreadLabel();
        Message message = item.getItem();
        User sender = message.getSender();


        LocalDateTime lastSeen = sender.getLastSeen();
        if (lastSeen != null && lastSeen.isAfter(LocalDateTime.now().minusMinutes(5))) {
            onlineIcon.setVisible(true);
            onlineIcon.setClassName("online-icon-green");
            onlineStatusLabel.setVisible(true);
            onlineStatusLabel.setText("is online");
        } else {
            onlineIcon.setVisible(true);
            onlineIcon.getElement().getStyle().set("color", "gray");
            onlineStatusLabel.setVisible(true);
            onlineStatusLabel.setText(sender.getOfflineDurationText());
        }
    }


    @Subscribe(id = "replyBtn", subject = "clickListener")
    public void onReplyBtnClick(final ClickEvent<JmixButton> event) {
        Message selectedMessage = item.getItem();

        if (selectedMessage != null) {
            Optional<View<?>> currentViewOpt = Optional.of(UiComponentUtils.getCurrentView());

            if (currentViewOpt.isPresent()) {
                DialogWindow<ConversationPage> dialog = dialogWindows.view(currentViewOpt.get(), ConversationPage.class)
                        .build();

                ConversationPage dialogView = dialog.getView();
                dialogView.setMessageId(selectedMessage.getId());

                dialog.addAfterOpenListener(e -> {
                    dialog.getElement().executeJs(
                            "const el = this;" +
                                    "function updateTheme() {" +
                                    "  if (window.innerWidth < 768) {" +
                                    "    el.setAttribute('theme', 'fullscreen');" +
                                    "  } else {" +
                                    "    el.setAttribute('theme', 'custom-position-left');" +
                                    "  }" +
                                    "}" +
                                    "window.addEventListener('resize', updateTheme);" +
                                    "updateTheme();"
                    );
                });


                dialog.setModal(false);
                dialog.setCloseOnOutsideClick(false);
                dialog.setResizable(true);
                dialog.setDraggable(true);
                dialog.open();
            }
        }
    }


    @Subscribe(id = "centerBtn", subject = "clickListener")
    public void onCenterBtnClick(final ClickEvent<JmixButton> event) {
        Message selectedMessage = item.getItem();


        if (selectedMessage != null) {
            Optional<View<?>> currentViewOpt = Optional.of(UiComponentUtils.getCurrentView());

            if (currentViewOpt.isPresent()) {
                DialogWindow<Conversationlist> dialog = dialogWindows.view(currentViewOpt.get(), Conversationlist.class)
                        .build();
                dialog.setWidth("500px");
                dialog.setHeight("100%");

                Conversationlist dialogView = dialog.getView();
                dialogView.setOtherUserId(selectedMessage.getReciver().getId(),selectedMessage.getSender().getId() );
                dialog.addAfterOpenListener(e -> {
                    dialog.getElement().executeJs("""
                const overlay = this.$.overlay;
                
                function updateTheme() {
                    if (window.innerWidth < 768) {
                        overlay.setAttribute('theme', 'fullscreen');
                        overlay.style.left = '0px';
                        overlay.style.right = '0px';
                        overlay.style.bottom = '0px';
                        overlay.style.top = '0px';
                        overlay.style.width = '100vw';
                        overlay.style.height = '100vh';
                    } else {
                        overlay.setAttribute('theme', 'custom-position-left-large');
                        overlay.style.left = '20px';
                        overlay.style.right = 'auto';
                        overlay.style.bottom = '20px';
                        overlay.style.top = 'auto';
                        overlay.style.width = '';
                        overlay.style.height = '';
                    }
                }
                
                window.addEventListener('resize', updateTheme);
                updateTheme();
    """);
                });

                //notifications.create("ReceiverId: " + selectedMessage.getReciver().getId() + " SenderId: " + selectedMessage.getSender().getId()).show();
                dialog.setModal(false);
                dialog.setCloseOnOutsideClick(false);
                dialog.setResizable(true);
                dialog.setDraggable(true);
                dialog.open();
            }
        }
    }
    

    private void updateUnreadLabel() {
        Message message = item.getItem();
        if (message != null && message.getRl() != null && message.getRl().equalsIgnoreCase("r")) {
            unreadLabel.setVisible(true);
            unreadLabel.setText("Unread");
        } else {
            unreadLabel.setVisible(false);
            unreadLabel.setText("");        }
    }

   @Subscribe(id = "item", target = Target.DATA_CONTAINER)
    public void onItemItemChange(final InstanceContainer.ItemChangeEvent<Message> event) {
        updateUnreadLabel();
    }

    @Override
    public void setItem(Message message) {
        item.setItem(message);

        if (message.getAttachment() != null) {
            attachment.setVisible(true);
            attachment.setText(message.getAttachment().getFileName());
        } else {
            attachment.setVisible(false);
        }

        updateUnreadLabel();
    }

    @Subscribe(id = "attachment", subject = "clickListener")
    public void onAttachmentClick(final ClickEvent<JmixButton> event) {

        //UI.getCurrent().navigate("profile-view"); //lasciare sezione in profilo ma non redirect da qui
        Message message = item.getItem();
        FileRef fileRef = message.getAttachment();
        downloader.download(fileRef);
    }

   


}