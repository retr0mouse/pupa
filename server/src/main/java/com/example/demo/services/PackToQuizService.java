package com.example.demo.services;

import com.example.demo.keys.PackToQuizId;
import com.example.demo.models.*;
import com.example.demo.repositories.*;
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
    private final UserRepository userRepository;

    @Autowired
    public PackToQuizService(PackToQuizRepository packToQuizRepository, QuizPackRepository quizPackRepository, TranslateQuizRepository translateQuizRepository, QuizTypeRepository quizTypeRepository, UserRepository userRepository) {
        this.packToQuizRepository = packToQuizRepository;
        this.quizPackRepository = quizPackRepository;
        this.translateQuizRepository = translateQuizRepository;
        this.quizTypeRepository = quizTypeRepository;
        this.userRepository = userRepository;
    }

    public void addQuizToPack() {

    }

//    public void addPackToQuiz(QuizPack quizPack, TranslateQuiz translateQuiz, Long quizType, Long userId) {
//        Optional<UserTable> user = userRepository.findById(userId);
//        if (user.isEmpty()) {
//            throw new IllegalStateException("The user with id (" +
//                    userId + ") is not in the database");
//        }
//        Optional<QuizPack> pack = quizPackRepository.findQuizPackByTitleAndCreator(quizPack.getTitle(), user.get());
//        if (pack.isEmpty()) {
//            throw new IllegalStateException("The pack with title (" +
//                    quizPack.getTitle() + ") is not in the database");
//        }
//        Optional<QuizType> type = quizTypeRepository.findById(quizType);
//        if (type.isEmpty()) {
//            throw new IllegalStateException("The quiz type with id (" +
//                    quizType + ") is not in the database");
//        }
//        Optional<TranslateQuiz> quiz;
//        if (quizType == 0) {
//            quiz = translateQuizRepository.findById(translateQuiz.getId());
//        }
//        else {
//            throw new IllegalStateException("The quiz type (" + quizType + ") is not in the database");
//        }
//
//        if (quiz.isEmpty()) {
//            throw new IllegalStateException("The quiz with id (" +
//                    translateQuiz.getId() + ") is not in the database");
//        }
//        if (packToQuizRepository.findByQuizPackAndTranslateQuizAndQuizType(pack.get(), quiz.get(), type.get()).isPresent()) {
//            throw new IllegalStateException("This relation is already in the database");
//        }
//        packToQuizRepository.save(new PackToQuiz(quiz.get(), pack.get(), type.get()));
//    }

    public List<PackToQuiz> getAllPacksToQuizzes() {
        return packToQuizRepository.findAll();
    }
}
