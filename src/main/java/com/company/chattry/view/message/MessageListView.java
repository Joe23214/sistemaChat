package com.company.chattry.view.message;

import com.company.chattry.component.ChatDialog;
import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;
import com.company.chattry.view.blank.BlankView;
import com.company.chattry.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.Route;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.component.virtuallist.JmixVirtualList;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.CollectionContainer;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.model.DataContext;
import io.jmix.flowui.model.InstanceContainer;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.vaadin.flow.component.UI;

import java.time.LocalDateTime;
import java.util.ArrayList;


@Route(value = "messages", layout = MainView.class)
@ViewController(id = "Message.list")
@ViewDescriptor(path = "message-list-view.xml")
@LookupComponent("messagesDataGrid")
@DialogMode(width = "64em")
public class MessageListView extends StandardListView<Message> {
    @ViewComponent
    private CollectionLoader<Message> messagesDl;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @Autowired
    private DialogWindows dialogWindows;
    @ViewComponent
    private JmixVirtualList<Message> myProjectList;
    @ViewComponent
    private CollectionContainer<Message> messagesDc;
    @ViewComponent
    private HorizontalLayout x;
    @ViewComponent
    private JmixButton refreshcustom;

    @Subscribe
    public void onBeforeShow(final BeforeShowEvent event) {
        User currentUser = (User) currentAuthentication.getUser();
        messagesDl.setParameter("currentUser", currentUser);
        messagesDl.setParameter("now", LocalDateTime.now());
        messagesDl.load();

        refreshcustom.setVisible(true);
        refreshcustom.getElement().setAttribute("class", "responsive-refresh-button");

    }

        @Subscribe(id = "sendNewMessage", subject = "clickListener")
    public void onSendNewMessageClick(final ClickEvent<JmixButton> event) {

        DialogWindow<BlankView> dialog = dialogWindows.view(this, BlankView.class).build();


        dialog.addAfterOpenListener(e -> {
            dialog.getElement().executeJs("""
            const el = this;
            function updateTheme() {
                if (window.innerWidth < 768) {
                    el.setAttribute('theme', 'fullscreen');
                } else {
                    el.setAttribute('theme', 'custom-position');
                }
            }
            window.addEventListener('resize', updateTheme);
            updateTheme();
        """);
        });

        dialog.setModal(false);
        dialog.setCloseOnOutsideClick(false);
        dialog.setResizable(true);
        dialog.setDraggable(true);
        dialog.open();
    }

    @Subscribe(id = "refreshcustom", subject = "clickListener")
    private void onRefreshcustomClick(final ClickEvent<JmixButton> event) {
        UI.getCurrent().getPage().reload();
    }


}







