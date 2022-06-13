package com.example.demo.keys;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class PackToQuizId implements Serializable {
    @Column (name = "quiz_id")
    private Long quizId;

    @Column (name = "pack_id")
    private Long packId;

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public Long getPackId() {
        return packId;
    }

    public void setPackId(Long packId) {
        this.packId = packId;
    }

    public PackToQuizId() {
    }

    public PackToQuizId(Long quizId, Long packId) {
        this.quizId = quizId;
        this.packId = packId;
    }
}
