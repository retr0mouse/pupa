package com.example.demo.controllers;

import com.example.demo.models.TranslateQuiz;
import com.example.demo.services.TranslateQuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/tr_quiz")
public class TranslateQuizController {
    private final TranslateQuizService translateQuizService;

    @Autowired
    public TranslateQuizController(TranslateQuizService translateQuizService) {
        this.translateQuizService = translateQuizService;
    }

    @GetMapping("get")
    public List<TranslateQuiz> getAllQuizzes() {
        return translateQuizService.getAllQuizzes();
    }

    @GetMapping(value = "get", params = "id")
    public TranslateQuiz getQuizById(@RequestParam Long id) {
        return translateQuizService.getQuizById(id);
    }

    @PostMapping("add")
    public void addQuiz(@RequestBody TranslateQuiz quiz) {
        translateQuizService.addQuiz(quiz);
    }
}
