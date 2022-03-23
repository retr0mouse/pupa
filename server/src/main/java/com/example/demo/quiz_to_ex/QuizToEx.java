package com.example.demo.quiz_to_ex;

import javax.persistence.*;

@Entity
@Table
public class QuizToEx {
    @Id
    @SequenceGenerator(
            name = "quiz_to_ex_sequence",
            sequenceName = "quiz_to_ex_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_sequence"
    )
    private Long id;
    private Long quiz_id;
    private Long ex_id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuiz_id(Long quiz_id) {
        this.quiz_id = quiz_id;
    }

    public void setEx_id(Long ex_id) {
        this.ex_id = ex_id;
    }

    public Long getId() {
        return id;
    }

    public Long getQuiz_id() {
        return quiz_id;
    }

    public Long getEx_id() {
        return ex_id;
    }

    public QuizToEx(Long id, Long quiz_id, Long ex_id) {
        this.id = id;
        this.quiz_id = quiz_id;
        this.ex_id = ex_id;
    }

    public QuizToEx(Long quiz_id, Long ex_id) {
        this.quiz_id = quiz_id;
        this.ex_id = ex_id;
    }

    public QuizToEx() {
    }
}
