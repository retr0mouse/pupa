package com.example.demo.controllers;

import com.example.demo.models.QuizPack;
import com.example.demo.models.MarkRightQuiz;
import com.example.demo.services.QuizPackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/quiz_pack")
public class QuizPackController {

    private final QuizPackService quizPackService;

    @Autowired
    public QuizPackController(QuizPackService quizService) {
        this.quizPackService = quizService;
    }

    @GetMapping("get")
    public List<QuizPack> getQuizPacks() {
        return quizPackService.getQuizPacks();
    }

    @GetMapping(value = "get", params = "id")
    public QuizPack getQuizPackById(@RequestParam Long id) {
        if (!id.toString().matches("^\\d+$")) {
            throw new IllegalStateException("Please provide an id");
        }
        return quizPackService.getQuizPackById(id);
    }

    @PostMapping(path = "add")
    public void addQuiz(@RequestBody QuizPack quizPack, @RequestParam Long userId) {
        quizPackService.addNewQuizPack(quizPack, userId);
    }

    @PostMapping(path = "addQuiz")
    public void addQuizToPack(@RequestParam Long packId, @RequestBody MarkRightQuiz quiz) {
        System.out.println("keks");
    }
}
