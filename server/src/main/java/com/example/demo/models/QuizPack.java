package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    @ManyToMany (
            fetch = FetchType.LAZY,
            cascade = CascadeType.PERSIST
    )
    @JoinTable (
            name = "quizzes_in_packs",
            joinColumns = {
                    @JoinColumn (
                            name = "pack_id",
                            referencedColumnName = "id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn (
                            name = "quiz_id",
                            referencedColumnName = "id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<Quiz> quizzes = new ArrayList<>();

    public QuizPack(String title, LocalDate created, String description, UserTable creator) {
        this.title = title;
        this.created = created;
        this.description = description;
        this.creator = creator;
    }

    public QuizPack(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public QuizPack() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuizPack quizPack = (QuizPack) o;
        return Objects.equals(id, quizPack.id) && Objects.equals(title, quizPack.title) && Objects.equals(created, quizPack.created) && Objects.equals(description, quizPack.description) && Objects.equals(creator, quizPack.creator) && Objects.equals(quizzes, quizPack.quizzes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, created, description, creator, quizzes);
    }

    @Override
    public String toString() {
        return "QuizPack{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", created=" + created +
                ", description='" + description + '\'' +
//                ", creator=" + creator +
                ", quizzes=" + quizzes +
                '}';
    }

//    @JsonBackReference (value = "quiz_pack-quiz")
    public List<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(List<Quiz> quizzes) {
        this.quizzes = quizzes;
    }

    public void addQuiz(Quiz quiz) {
        if (!quizzes.contains(quiz)) {
            quizzes.add(quiz);
        }
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

    @JsonBackReference (value = "quiz_pack-creator")
    public UserTable getCreator() {
        return creator;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
