package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity (name = "TranslateQuiz")
@Table (name = "translate_quiz")
@DiscriminatorValue("0")
public class TranslateQuiz extends Quiz {
    @Id // automatically determines the primary key
    @SequenceGenerator( // generate a sequence
            name = "translate_quiz_sequence",
            sequenceName = "translate_quiz_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "translate_quiz_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;

    @Column (
            name = "initial_word"
    )
    private String initialWord;

    @Column (
            name = "translated_word"
    )
    private String translatedWord;

    @ManyToMany(
            mappedBy = "quizzes",
            fetch = FetchType.LAZY
    )
    private List<QuizPack> packs = new ArrayList<>();

    @Override
    public String toString() {
        return "TranslateQuiz{" +
                "id=" + id +
                ", initialWord='" + initialWord + '\'' +
                ", translatedWord='" + translatedWord + '\'' +
                ", packs=" + packs +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TranslateQuiz that = (TranslateQuiz) o;
        return Objects.equals(id, that.id) && Objects.equals(initialWord, that.initialWord) && Objects.equals(translatedWord, that.translatedWord) && Objects.equals(packs, that.packs);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, initialWord, translatedWord, packs);
    }

    @JsonBackReference (value = "trans_quiz-pack")
    public List<QuizPack> getPacks() {
        return packs;
    }

    public void setPacks(List<QuizPack> packs) {
        this.packs = packs;
    }

    public TranslateQuiz() {
    }

    public TranslateQuiz(String initialWord, String translatedWord) {
        this.initialWord = initialWord;
        this.translatedWord = translatedWord;
    }

    public TranslateQuiz(Long id, String initialWord, String translatedWord) {
        this.id = id;
        this.initialWord = initialWord;
        this.translatedWord = translatedWord;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInitialWord() {
        return initialWord;
    }

    public void setInitialWord(String initialWord) {
        this.initialWord = initialWord;
    }

    public String getTranslatedWord() {
        return translatedWord;
    }

    public void setTranslatedWord(String translatedWord) {
        this.translatedWord = translatedWord;
    }
}
