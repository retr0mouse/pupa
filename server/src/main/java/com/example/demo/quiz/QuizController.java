package com.example.demo.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // makes this class to serve REST endpoints
@RequestMapping(path = "api/v1/quiz")    // to map an endpoint
public class QuizController {    // api layer

    private final QuizService quizService;

    @Autowired  // dependency injection of a method parameter into the class field, because field is not an instance
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping // when the endpoint is reached, this method will be executed
    public List<Quiz> getQuizzes() {
        return quizService.getQuizzes();
    }

    @PostMapping  // map the quiz object that the client gives us
    public void addQuiz(@RequestBody Quiz quiz) {
        quizService.addNewQuiz(quiz);
    }
}
