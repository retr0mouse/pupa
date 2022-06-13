package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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

    @Column (
            name = "description"
    )
    private String description;

    @ManyToOne (
            cascade = CascadeType.ALL
    )
    @JoinColumn (
            name = "user_table_id",
            nullable = false,
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "user_table_id_fk")
    )
    private UserTable creator;

    @OneToMany (
            mappedBy = "quizPack",
            cascade = CascadeType.ALL
    )
    private List<PackToQuiz> packsToQuizzes = new ArrayList<>();

    private void addPackToQuiz(PackToQuiz packToQuiz) {
        if (!packsToQuizzes.contains(packToQuiz)) {
            packsToQuizzes.add(packToQuiz);
        }
    }

    private void remotePackToQuiz(PackToQuiz packToQuiz) {
        packsToQuizzes.remove(packToQuiz);
    }

    public QuizPack(String title, LocalDate created, String description, UserTable creator) {
        this.title = title;
        this.created = created;
        this.description = description;
        this.creator = creator;
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

    public void setCreator(UserTable user) {
        this.creator = user;
    }

    @JsonBackReference
    public UserTable getCreator() {
        return creator;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<PackToQuiz> getPacksToQuizzes() {
        return packsToQuizzes;
    }

    public void setPacksToQuizzes(List<PackToQuiz> packsToQuizzes) {
        this.packsToQuizzes = packsToQuizzes;
    }
}
