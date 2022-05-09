package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;

@Entity (name = "QuizPack")
@Table (name = "quiz_pack")
public class QuizPack {
    @Id // automatically determines the primary key
    @SequenceGenerator( // generate a sequence
            name = "quiz_pack_sequence",
            sequenceName = "quiz_pack_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_pack_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;

    @Column (
            name = "title",
            nullable = false
    )
    private String title;

    @Column (
            name = "created",
            nullable = false
    )
    private LocalDate created;

    @ManyToOne (
            cascade = CascadeType.ALL
    )
    @JoinColumn (
            name = "user_table_id",
            nullable = false,
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "user_table_id_fk")
    )
    private User user;

    public QuizPack(Long id, String title, LocalDate created) {
        this.id = id;
        this.title = title;
        this.created = created;
    }

    public QuizPack() {
    }

    public QuizPack(String title) {
        this.title = title;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public LocalDate getCreated() {
        return created;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @JsonBackReference
    public User getUser() {
        return user;
    }
}
