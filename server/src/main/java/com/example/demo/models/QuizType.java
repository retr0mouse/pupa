package com.example.demo.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "QuizType")
@Table(name = "quiz_type")
public class QuizType {
    @Id // automatically determines the primary key
    @SequenceGenerator( // generate a sequence
            name = "quiz_type_sequence",
            sequenceName = "quiz_type_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_type_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;

    @Column (
            name = "title",
            updatable = false
    )
    private String title;

    @Column (
            name = "description",
            updatable = false
    )
    private String description;

    public QuizType() {
    }

    public QuizType(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
