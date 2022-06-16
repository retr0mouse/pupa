package com.example.demo.controllers;

import com.example.demo.keys.PackToQuizId;
import com.example.demo.models.PackToQuiz;
import com.example.demo.models.QuizPack;
import com.example.demo.models.TranslateQuiz;
import com.example.demo.services.PackToQuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/pack_to_quiz")
public class PackToQuizController {
    private final PackToQuizService packToQuizService;

    @Autowired
    public PackToQuizController(PackToQuizService packToQuizService) {
        this.packToQuizService = packToQuizService;
    }

    @GetMapping("get")
    public List<PackToQuiz> getAllPacksToQuizzes() {
        return packToQuizService.getAllPacksToQuizzes();
    }

    @PostMapping(value = "add", params = {"type", "userId"})
    public void addRelation(@RequestBody List<TranslateQuiz> quizzesList,
                            @RequestParam Long type,
                            @RequestParam Long packId,
                            @RequestParam Long userId) {
        packToQuizService.addPackToQuiz(quizzesList, packId, type, userId);
    }
}
