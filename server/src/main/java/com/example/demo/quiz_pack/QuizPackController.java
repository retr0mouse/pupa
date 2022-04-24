package com.example.demo.quiz_pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/quiz_pack")
public class QuizPackController {

    private final QuizPackService quizService;

    @Autowired
    public QuizPackController(QuizPackService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("get")
    public List<QuizPack> getQuizPacks() {
        return quizService.getQuizPacks();
    }

    @GetMapping(value = "get", params = "id")
    public QuizPack getQuizPackById(@RequestParam Long id) {
        if (!id.toString().matches("^\\d+$")) {
            throw new IllegalStateException("Please provide an id");
        }
        return quizService.getQuizPackById(id);
    }

    @PostMapping(path = "add")
    public void addQuiz(@RequestBody QuizPack quiz, @RequestParam Long userId) {
        quizService.addNewQuizPack(quiz, userId);
    }
}
