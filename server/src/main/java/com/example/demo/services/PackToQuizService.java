package com.example.demo.services;

import com.example.demo.keys.PackToQuizId;
import com.example.demo.models.PackToQuiz;
import com.example.demo.models.QuizPack;
import com.example.demo.models.QuizType;
import com.example.demo.models.TranslateQuiz;
import com.example.demo.repositories.PackToQuizRepository;
import com.example.demo.repositories.QuizPackRepository;
import com.example.demo.repositories.QuizTypeRepository;
import com.example.demo.repositories.TranslateQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackToQuizService {
    private final PackToQuizRepository packToQuizRepository;
    private final QuizPackRepository quizPackRepository;
    private final TranslateQuizRepository translateQuizRepository;
    private final QuizTypeRepository quizTypeRepository;

    @Autowired
    public PackToQuizService(PackToQuizRepository packToQuizRepository, QuizPackRepository quizPackRepository, TranslateQuizRepository translateQuizRepository, QuizTypeRepository quizTypeRepository) {
        this.packToQuizRepository = packToQuizRepository;
        this.quizPackRepository = quizPackRepository;
        this.translateQuizRepository = translateQuizRepository;
        this.quizTypeRepository = quizTypeRepository;
    }

    public void addPackToQuiz(PackToQuizId packToQuizId) {
        Optional<PackToQuiz> packToQuiz = packToQuizRepository.findById(packToQuizId);
        Optional<QuizPack> pack = quizPackRepository.findById(packToQuizId.getPackId());
        Optional<TranslateQuiz> quiz;
        Optional<QuizType> quizType = quizTypeRepository.findById(packToQuizId.getQuizTypeId());
        if (packToQuizId.getQuizTypeId() == 0) {
            quiz = translateQuizRepository.findById(packToQuizId.getQuizId());
        }
        else {
            throw new IllegalStateException("The quiz type (" + packToQuizId.getQuizTypeId() + ") is not in the database");
        }

        if (quizType.isEmpty()) {
            throw new IllegalStateException("The quiz type with id (" +
                    packToQuizId.getPackId() + ") is not in the database");
        }

        if (pack.isEmpty()) {
            throw new IllegalStateException("The pack with id (" +
                    packToQuizId.getPackId() + ") is not in the database");
        }

        if (quiz.isEmpty()) {
            throw new IllegalStateException("The quiz with id (" +
                    packToQuizId.getQuizId() + ") is not in the database");
        }

        if (packToQuiz.isPresent()) {
            throw new IllegalStateException(
                    "The relation with id (" +
                            packToQuizId.getQuizId() + "," +
                            packToQuizId.getPackId() + "," +
                            packToQuizId.getQuizTypeId() + "," +
                            ") is already in the database"
            );
        }
        packToQuizRepository.save(new PackToQuiz(
                new PackToQuizId(packToQuizId.getQuizId(), packToQuizId.getPackId(), packToQuizId.getQuizTypeId()),
                        quiz.get(),
                        pack.get(),
                        quizType.get()
                )
        );
    }

    public List<PackToQuiz> getAllPacksToQuizzes() {
        return packToQuizRepository.findAll();
    }
}
