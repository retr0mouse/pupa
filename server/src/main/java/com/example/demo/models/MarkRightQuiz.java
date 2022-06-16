package com.example.demo.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity (name = "MarkRightQuiz")
@Table(name = "mark_right_quiz")
@DiscriminatorValue("1")
public class MarkRightQuiz extends Quiz{
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

    @OneToMany (
            mappedBy = "markRightQuiz",
            cascade = CascadeType.ALL
    )
    private List<PackToQuiz> packsToQuizzes = new ArrayList<>();

    public List<PackToQuiz> getPacksToQuizzes() {
        return packsToQuizzes;
    }

    public void setPacksToQuizzes(List<PackToQuiz> packsToQuizzes) {
        this.packsToQuizzes = packsToQuizzes;
    }

    private void addPackToQuiz(PackToQuiz packToQuiz) {
        if (!packsToQuizzes.contains(packToQuiz)) {
            packsToQuizzes.add(packToQuiz);
        }
    }

    private void removePackToQuiz(PackToQuiz packToQuiz) {
        packsToQuizzes.remove(packToQuiz);
    }

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
