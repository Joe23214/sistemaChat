package com.company.chattry.view.profile;


import com.company.chattry.app.MessageNotifierService;
import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;
import com.company.chattry.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Hr;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.renderer.TextRenderer;
import com.vaadin.flow.router.Route;
import io.jmix.core.DataManager;
import io.jmix.core.FileRef;
import io.jmix.core.FileStorage;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.component.formlayout.JmixFormLayout;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.download.Downloader;
import io.jmix.flowui.download.FileRefDownloadDataProvider;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.model.InstanceContainer;
import io.jmix.flowui.model.InstanceLoader;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

@Route(value = "profile-view", layout = MainView.class)
@ViewController(id = "ProfileView")
@ViewDescriptor(path = "profile-view.xml")
public class ProfileView extends StandardView {
    @ViewComponent
    private JmixButton editBtn;
    @ViewComponent
    private InstanceLoader<User> userDl;
    @ViewComponent
    private JmixFormLayout readOnlyForm;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @ViewComponent
    private InstanceContainer<User> userDc;
    @ViewComponent
    private JmixFormLayout editForm;
    @ViewComponent
    private JmixButton cancelBtn;
    @ViewComponent
    private JmixButton saveBtn;
    @Autowired
    private DataManager dataManager;
    @ViewComponent
    private Hr line;
    @ViewComponent
    private DataGrid<Message> attachmentsTable;
    @ViewComponent
    private VerticalLayout attachmentsSection;
    @ViewComponent
    private CollectionLoader<Message> attachmentsDl;
    @Autowired
    private Downloader downloader;
    @ViewComponent
    private JmixButton allegati;

    @Subscribe
    public void onBeforeShow(final BeforeShowEvent event) {
        User currentUser = (User) currentAuthentication.getUser();

        userDl.setParameter("currentUserId", currentUser.getId());

        userDl.load();

        attachmentsSection.setVisible(false);
    }

    @Subscribe(id = "editBtn", subject = "clickListener")
    public void onEditBtnClick(final ClickEvent<JmixButton> event) {
        editForm.setVisible(true);
        readOnlyForm.setVisible(true);
        editBtn.setVisible(false);
        saveBtn.setVisible(true);
        cancelBtn.setVisible(true);
        line.setVisible(true);
    }
    public void saveUser() {
        User user = userDc.getItem();
        dataManager.save(user);
    }

    @Subscribe(id = "saveBtn", subject = "clickListener")
    public void onSaveBtnClick1(final ClickEvent<JmixButton> event) {
        saveUser();
        editForm.setVisible(false);
        readOnlyForm.setVisible(true);
        editBtn.setVisible(true);
        saveBtn.setVisible(false);
        cancelBtn.setVisible(false);
        line.setVisible(false);
    }

    @Subscribe(id = "cancelBtn", subject = "clickListener")
    public void onCancelBtnClick1(final ClickEvent<JmixButton> event) {
        userDl.load();
        editForm.setVisible(false);
        readOnlyForm.setVisible(true);
        editBtn.setVisible(true);
        saveBtn.setVisible(false);
        cancelBtn.setVisible(false);
        line.setVisible(false);
    }

    @Subscribe(id = "home", subject = "clickListener")
    public void onHomeClick(final ClickEvent<JmixButton> event) {
        UI.getCurrent().navigate("messages");
    }

    @Subscribe(id = "allegati", subject = "clickListener")
    public void onAllegatiClick(final ClickEvent<JmixButton> event) {
        User currentUser = userDc.getItem();
        if (currentUser == null) return;
        if(allegati.getText().equals("Vedi i tuoi allegati")){
            attachmentsDl.setParameter("userId", currentUser.getId());
            attachmentsDl.load();

            attachmentsSection.setVisible(true);
            allegati.setText("Nascondi i tuoi allegati");
        }else{
            attachmentsSection.setVisible(false);
            allegati.setText("Vedi i tuoi allegati");
        }

    }

    @Subscribe
    public void onInit(final InitEvent event) {
        attachmentsTable.getColumnByKey("attachment")
                .setRenderer(new TextRenderer<>(message -> {
                    FileRef ref = message.getAttachment();
                    return ref != null ? ref.getFileName() : "";
                }));
        attachmentsTable.addComponentColumn(message -> {
            Icon fileIcon = VaadinIcon.FILE.create();
            fileIcon.getStyle().set("font-size", "20px");
            return fileIcon;
        }).setHeader("");
        attachmentsTable.addItemClickListener(e -> {
            Message msg = e.getItem();
            FileRef fileRef = msg.getAttachment();
            if (fileRef != null) {
                downloader.download(fileRef);
            }
        });
    }
    
}




