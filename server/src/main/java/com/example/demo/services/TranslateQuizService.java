package com.example.demo.services;

import com.example.demo.models.TranslateQuiz;
import com.example.demo.repositories.TranslateQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TranslateQuizService {
    private final TranslateQuizRepository translateQuizRepository;

    @Autowired
    public TranslateQuizService(TranslateQuizRepository translateQuizRepository) {
        this.translateQuizRepository = translateQuizRepository;
    }

    public void addQuiz(TranslateQuiz quiz) {
        translateQuizRepository.save(quiz);
    }

    public List<TranslateQuiz> getAllQuizzes() {
        return translateQuizRepository.findAll();
    }

    public TranslateQuiz getQuizById(Long id) {
        return translateQuizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "The quiz with id (" + id + ") does not exist"
                ));
    }
}
