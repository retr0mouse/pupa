package com.example.demo.mark_right_ex;

import javax.persistence.*;

@Entity
@Table
public class MarkRightEx {
    @Id
    @SequenceGenerator(
            name = "mark_right_ex_sequence",
            sequenceName = "mark_right_ex_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mark_right_ex_sequence"
    )
    private Long id;
    private String question;
    private Long right_id;
    private Long quiz_to_ex_id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setRight_id(Long right_id) {
        this.right_id = right_id;
    }

    public void setQuiz_to_ex_id(Long quiz_to_ex_id) {
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public Long getRight_id() {
        return right_id;
    }

    public Long getQuiz_to_ex_id() {
        return quiz_to_ex_id;
    }

    public MarkRightEx(Long id, String question, Long right_id, Long quiz_to_ex_id) {
        this.id = id;
        this.question = question;
        this.right_id = right_id;
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public MarkRightEx(String question, Long right_id, Long quiz_to_ex_id) {
        this.question = question;
        this.right_id = right_id;
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public MarkRightEx() {
    }
}
