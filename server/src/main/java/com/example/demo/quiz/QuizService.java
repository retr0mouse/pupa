package com.example.demo.quiz;

import com.example.demo.student.StudentRepository;
import com.example.demo.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    @Autowired
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }

    public void addNewQuiz(Quiz quiz) {
        Optional<Quiz> quizOptional = quizRepository.findQuizByTitle(quiz.getTitle());
        if (quizOptional.isPresent()) {
            throw new IllegalStateException("title taken");
        }
        quizRepository.save(quiz);
    }
}
