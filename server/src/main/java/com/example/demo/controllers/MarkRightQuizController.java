package com.example.demo.controllers;

import com.example.demo.models.MarkRightQuiz;
import com.example.demo.services.MarkRightQuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/mr_quiz")
public class MarkRightQuizController {
    private final MarkRightQuizService markRightQuizService;

    @Autowired
    public MarkRightQuizController(MarkRightQuizService markRightQuizService) {
        this.markRightQuizService = markRightQuizService;
    }

    @GetMapping("get")
    public List<MarkRightQuiz> getAllQuizzes() {
        return markRightQuizService.getAllQuizzes();
    }

    @GetMapping(value = "get", params = "id")
    public MarkRightQuiz getQuizById(@RequestParam Long id) {
        return markRightQuizService.getQuizById(id);
    }

    @PostMapping("add")
    public void addQuiz(@RequestBody MarkRightQuiz quiz) {
        markRightQuizService.addQuiz(quiz);
    }
}
