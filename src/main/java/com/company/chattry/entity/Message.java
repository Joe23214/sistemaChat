package com.company.chattry.entity;

import io.jmix.core.FileRef;
import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.JmixEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.UUID;

@JmixEntity
@Table(name = "MESSAGE", indexes = {
        @Index(name = "IDX_MESSAGE_SENDER", columnList = "SENDER_ID"),
        @Index(name = "IDX_MESSAGE_RECIVER", columnList = "RECIVER_ID")
})
@Entity
public class Message {
    @Id
    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    private UUID id;


    @Column(name = "ATTACHMENT", length = 1024)
    private FileRef attachment;

    @Column(name = "RL", nullable = false, length = 1)
    @NotNull
    private String rl;

    @Column(name = "CONTENT", nullable = false)
    @NotNull
    private String content;

    @JoinColumn(name = "SENDER_ID", nullable = false)
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private User sender;

    @JoinColumn(name = "RECIVER_ID", nullable = false)
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private User reciver;

    @NotNull
    @Column(name = "SENT_AT", nullable = false)
    private LocalDateTime sentAt;

    public FileRef getAttachment() {
        return attachment;
    }

    public void setAttachment(FileRef attachment) {
        this.attachment = attachment;
    }

    public String getRl() {
        return rl;
    }

    public void setRl(String rl) {
        this.rl = rl;
    }

    public void setSentAt(LocalDateTime sentAt) {
        this.sentAt = sentAt;
    }

    public LocalDateTime getSentAt() {
        return sentAt;
    }

    @PrePersist
    public void setSentAtNow() {
        if (sentAt == null) {
            sentAt = LocalDateTime.now();
        }
    }

    public User getReciver() {
        return reciver;
    }

    public void setReciver(User reciver) {
        this.reciver = reciver;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

}