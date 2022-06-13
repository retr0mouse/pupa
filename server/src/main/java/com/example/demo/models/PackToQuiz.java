package com.example.demo.models;

import com.example.demo.keys.PackToQuizId;

import javax.persistence.*;

@Entity (name = "PackToQuiz")
@Table (name = "pack_to_quiz")
public class PackToQuiz {
    @EmbeddedId
    private PackToQuizId id;

    @ManyToOne
    @MapsId("quizId")
    @JoinColumn(name = "quiz_id")
    private TranslateQuiz translateQuiz;

    @ManyToOne
    @MapsId("quizId")
    @JoinColumn(name = "quiz_id")
    private MarkRightQuiz markRightQuiz;

    @ManyToOne
    @MapsId("packId")
    @JoinColumn(name = "pack_id")
    private QuizPack quizPack;

    public PackToQuiz(MarkRightQuiz markRightQuiz, QuizPack quizPack) {
        this.markRightQuiz = markRightQuiz;
        this.quizPack = quizPack;
    }

    public PackToQuiz(TranslateQuiz translateQuiz, QuizPack quizPack) {
        this.translateQuiz = translateQuiz;
        this.quizPack = quizPack;
    }

    public PackToQuizId getId() {
        return id;
    }

    public void setId(PackToQuizId id) {
        this.id = id;
    }

    public TranslateQuiz getTranslateQuiz() {
        return translateQuiz;
    }

    public void setTranslateQuiz(TranslateQuiz translateQuiz) {
        this.translateQuiz = translateQuiz;
    }

    public QuizPack getQuizPack() {
        return quizPack;
    }

    public void setQuizPack(QuizPack quizPack) {
        this.quizPack = quizPack;
    }

    public PackToQuiz() {
    }

    public MarkRightQuiz getMarkRightQuiz() {
        return markRightQuiz;
    }

    public void setMarkRightQuiz(MarkRightQuiz markRightQuiz) {
        this.markRightQuiz = markRightQuiz;
    }
}
