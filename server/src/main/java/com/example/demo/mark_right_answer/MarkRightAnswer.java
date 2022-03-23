package com.example.demo.mark_right_answer;

import javax.persistence.*;

@Entity
@Table
public class MarkRightAnswer {
    @Id
    @SequenceGenerator(
            name = "mark_right_answer_sequence",
            sequenceName = "mark_right_answer_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mark_right_answer_sequence"
    )
    private Long id;
    private String text;
    private String picture;
    private boolean is_right;
    private Long mark_right_ex_id;

    public MarkRightAnswer() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public void setIs_right(boolean is_right) {
        this.is_right = is_right;
    }

    public void setMark_right_ex_id(Long mark_right_ex_id) {
        this.mark_right_ex_id = mark_right_ex_id;
    }

    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public String getPicture() {
        return picture;
    }

    public boolean isIs_right() {
        return is_right;
    }

    public Long getMark_right_ex_id() {
        return mark_right_ex_id;
    }

    public MarkRightAnswer(Long id, String text, String picture, boolean right, Long mark_right_ex_id) {
        this.id = id;
        this.text = text;
        this.picture = picture;
        this.is_right = right;
        this.mark_right_ex_id = mark_right_ex_id;
    }

    public MarkRightAnswer(String text, String picture, boolean right, Long mark_right_ex_id) {
        this.text = text;
        this.picture = picture;
        this.is_right = right;
        this.mark_right_ex_id = mark_right_ex_id;
    }
}
