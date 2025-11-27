package com.company.chattry.component;

import com.company.chattry.view.blank.BlankView;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import io.jmix.flowui.Fragments;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.fragment.Fragment;
import io.jmix.flowui.fragment.FragmentOwner;
import io.jmix.flowui.xml.layout.loader.FragmentLoader;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ChatDialog extends Dialog {
    @Autowired
    private Fragments fragments;

    public void openChatDialog(FragmentOwner owner) {
        this.setModal(false);
        this.setResizable(false);
        this.setDraggable(true);

        this.getElement().getStyle()
                .set("position", "fixed")
                .set("bottom", "0")
                .set("right", "0")
                .set("width", "400px")
                .set("height", "50vh")
                .set("margin", "0")
                .set("border-radius", "8px")
                .set("box-shadow", "0 4px 12px rgba(0,0,0,0.3)")
                .set("z-index", "9999")
                .set("padding", "0");

        /*BlankView fragment = fragments.create(owner, BlankView.class);

        this.removeAll(); // Pulisci contenuto precedente
        this.add(fragment);

        this.open();*/
    }

}
