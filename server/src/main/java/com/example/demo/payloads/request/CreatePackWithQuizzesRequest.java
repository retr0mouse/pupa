package com.example.demo.payloads.request;

import com.example.demo.models.QuizPack;
import com.example.demo.models.TranslateQuiz;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class CreatePackWithQuizzesRequest {
    private QuizPack quizPack;
    private List<TranslateQuiz> translateQuizList;

    public QuizPack getQuizPack() {
        return quizPack;
    }

    public void setQuizPack(QuizPack quizPack) {
        this.quizPack = quizPack;
    }

    public List<TranslateQuiz> getTranslateQuizList() {
        return translateQuizList;
    }

    public void setTranslateQuizList(List<TranslateQuiz> translateQuizList) {
        this.translateQuizList = translateQuizList;
    }
}
