package com.example.demo.models;

import javax.persistence.*;

@Entity (name = "MarkRightQuiz")
@Table(name = "mark_right_quiz")
public class MarkRightQuiz {
    @Id // automatically determines the primary key
    @SequenceGenerator( // generate a sequence
            name = "mark_right_quiz_sequence",
            sequenceName = "mark_right_quiz_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mark_right_quiz_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;

    @Column (
            name = "question"
    )
    private String question;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public MarkRightQuiz(String question) {
        this.question = question;
    }

    public MarkRightQuiz() {
    }
}
