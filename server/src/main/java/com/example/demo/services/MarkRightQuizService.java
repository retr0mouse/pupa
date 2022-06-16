package com.example.demo.services;

import com.example.demo.models.MarkRightQuiz;
import com.example.demo.models.TranslateQuiz;
import com.example.demo.repositories.MarkRightQuizRepository;
import com.example.demo.repositories.TranslateQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkRightQuizService {
    private final MarkRightQuizRepository markRightQuizRepository;

    @Autowired
    public MarkRightQuizService(MarkRightQuizRepository markRightQuizRepository) {
        this.markRightQuizRepository = markRightQuizRepository;
    }

    public void addQuiz(MarkRightQuiz quiz) {
        markRightQuizRepository.save(quiz);
    }

    public List<MarkRightQuiz> getAllQuizzes() {
        return markRightQuizRepository.findAll();
    }

    public MarkRightQuiz getQuizById(Long id) {
        return markRightQuizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "The quiz with id (" + id + ") does not exist"
                ));
    }
}
