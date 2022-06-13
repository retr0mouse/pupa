package com.example.demo.controllers;

import com.example.demo.models.PackToQuiz;
import com.example.demo.models.UserTable;
import com.example.demo.repositories.PackToQuizRepository;
import com.example.demo.services.PackToQuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/pack_to_quiz")
public class PackToQuizController {
    private final PackToQuizService packToQuizService;

    @Autowired
    public PackToQuizController(PackToQuizService packToQuizService) {
        this.packToQuizService = packToQuizService;
    }

    @Autowired


    @GetMapping("get")
    public List<PackToQuiz> getAllPacksToQuizzes() {
        return packToQuizService.getAllPacksToQuizzes();
    }

    @GetMapping(value = "get", params = "id")
    public UserTable getUserById(@RequestParam Long id) {
        if (!id.toString().matches("^\\d+$")) {
            throw new IllegalStateException("Please provide an id");
        }
        return userTableService.getUserById(id);
    }
}
