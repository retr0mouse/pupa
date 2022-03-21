package com.example.demo.quiz;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Quiz {
    @Id
    @SequenceGenerator(
            name = "quiz_sequence",
            sequenceName = "quiz_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_sequence"
    )
    private Long id;
    private String title;
    private LocalDate created;
    private Long userId;

    public Quiz(Long id, String title, LocalDate created, Long userId) {
        this.id = id;
        this.title = title;
        this.created = created;
        this.userId = userId;
    }

    public Quiz() {
    }

    public Quiz(String title, LocalDate created, Long userId) {
        this.title = title;
        this.created = created;
        this.userId = userId;
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

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public Long getUserId() {
        return userId;
    }
}
