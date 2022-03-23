package com.example.demo.pair_two_ex;

import javax.persistence.*;

@Entity
@Table
public class PairTwoEx {
    @Id
    @SequenceGenerator(
            name = "pair_two_ex_sequence",
            sequenceName = "pair_two_ex_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "pair_two_ex_sequence"
    )
    private Long id;
    private Long quiz_to_ex_id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuiz_to_ex_id(Long quiz_to_ex_id) {
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public Long getId() {
        return id;
    }

    public Long getQuiz_to_ex_id() {
        return quiz_to_ex_id;
    }

    public PairTwoEx(Long id, Long quiz_to_ex_id) {
        this.id = id;
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public PairTwoEx(Long quiz_to_ex_id) {
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public PairTwoEx() {
    }
}
