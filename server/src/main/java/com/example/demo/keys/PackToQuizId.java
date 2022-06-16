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

    @Column (name = "quiz_type_id")
    private Long quizTypeId;

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

    public Long getQuizTypeId() {
        return quizTypeId;
    }

    public void setQuizTypeId(Long quizTypeId) {
        this.quizTypeId = quizTypeId;
    }

    public PackToQuizId() {
    }

    public PackToQuizId(Long quizId, Long packId, Long quizTypeId) {
        this.quizId = quizId;
        this.packId = packId;
        this.quizTypeId = quizTypeId;
    }
}
