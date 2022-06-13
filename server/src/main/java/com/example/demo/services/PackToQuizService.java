package com.example.demo.services;

import com.example.demo.models.PackToQuiz;
import com.example.demo.repositories.PackToQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackToQuizService {
    private final PackToQuizRepository packToQuizRepository;

    @Autowired
    public PackToQuizService(PackToQuizRepository packToQuizRepository) {
        this.packToQuizRepository = packToQuizRepository;
    }

    public void addPackToQuiz(PackToQuiz packToQuiz) {
        System.out.println("added lol");
    }

    public List<PackToQuiz> getAllPacksToQuizzes() {
        return packToQuizRepository.findAll();
    }
}
