package com.company.chattry.security;

import com.company.chattry.entity.Message;
import com.company.chattry.entity.User;
import io.jmix.security.model.EntityAttributePolicyAction;
import io.jmix.security.model.EntityPolicyAction;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.security.role.annotation.SpecificPolicy;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

@ResourceRole(name = "BasicRole", code = BasicRole.CODE)
public interface BasicRole {
    String CODE = "basic-role";

    // Permessi su Message
    @EntityPolicy(entityClass = Message.class, actions = EntityPolicyAction.ALL)
    void message();

    @EntityAttributePolicy(entityClass = Message.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    void messageAttributes();

    // Permessi su User
    @EntityPolicy(entityClass = User.class, actions = EntityPolicyAction.ALL)
    @EntityAttributePolicy(entityClass = User.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    void user();

    // Permessi su configurazione filtri
    @EntityPolicy(entityName = "flowui_FilterConfiguration", actions = {
            EntityPolicyAction.CREATE,
            EntityPolicyAction.READ,
            EntityPolicyAction.UPDATE,
            EntityPolicyAction.DELETE
    })
    void filterConfiguration();

    @EntityAttributePolicy(entityName = "flowui_FilterConfiguration", attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    void filterConfigAttributes();

    // Accesso alla sola lettura di UserSubstitution
    @EntityPolicy(entityName = "sec_UserSubstitutionEntity", actions = EntityPolicyAction.READ)
    @EntityAttributePolicy(entityName = "sec_UserSubstitutionEntity", attributes = "*", action = EntityAttributePolicyAction.VIEW)
    void userSubstitutionEntityAccess();

    @MenuPolicy(menuIds = {"User.list", "Message.list", "ProfileView", "datatl_entityInspectorListView"})
    @ViewPolicy(viewIds = {"User.list", "Message.list", "ConversationPage", "Conversationlist", "MessageViewDialog", "ProfileView", "BlankView", "Chatlistfragment", "LoginView", "MainView", "flowui_AddConditionView", "flowui_GroupFilterCondition.detail", "flowui_PropertyFilterCondition.detail", "flowui_DateIntervalDialog", "FragmentRenderer", "flowui_JpqlFilterCondition.detail", "headerPropertyFilterLayout", "datatl_entityInspectorListView"})
    void screens();

    @SpecificPolicy(resources = {"rest.enabled", "rest.fileDownload.enabled", "rest.fileUpload.enabled", "ui.loginToUi", "ui.genericfilter.modifyConfiguration", "ui.genericfilter.modifyGlobalConfiguration", "ui.genericfilter.modifyJpqlCondition"})
    void specific();
}