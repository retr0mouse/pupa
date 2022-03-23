package com.example.demo.translate_ex;

import javax.persistence.*;

@Entity
@Table
public class TranslateEx {
    @Id
    @SequenceGenerator(
            name = "translate_ex_sequence",
            sequenceName = "translate_ex_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "translate_ex_sequence"
    )
    private Long id;
    private String word;
    private String translation;
    private Long quiz_to_ex_id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    public void setQuiz_to_ex_id(Long quiz_to_ex_id) {
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public Long getId() {
        return id;
    }

    public String getWord() {
        return word;
    }

    public String getTranslation() {
        return translation;
    }

    public Long getQuiz_to_ex_id() {
        return quiz_to_ex_id;
    }

    public TranslateEx(Long id, String word, String translation, Long quiz_to_ex_id) {
        this.id = id;
        this.word = word;
        this.translation = translation;
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public TranslateEx(String word, String translation, Long quiz_to_ex_id) {
        this.word = word;
        this.translation = translation;
        this.quiz_to_ex_id = quiz_to_ex_id;
    }

    public TranslateEx() {
    }
}
