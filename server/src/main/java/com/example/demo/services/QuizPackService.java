package com.example.demo.services;

import com.example.demo.models.*;
import com.example.demo.payloads.request.CreatePackWithQuizzesRequest;
import com.example.demo.repositories.QuizPackRepository;
import com.example.demo.repositories.QuizTypeRepository;
import com.example.demo.repositories.TranslateQuizRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class QuizPackService {

    private final QuizPackRepository quizPackRepository;
    private final UserRepository userRepository;
    private final QuizTypeRepository quizTypeRepository;
    private final TranslateQuizRepository translateQuizRepository;

    @Autowired
    public QuizPackService(QuizPackRepository quizRepository, UserRepository userRepository, QuizTypeRepository quizTypeRepository, TranslateQuizRepository translateQuizRepository) {
        this.userRepository = userRepository;
        this.quizPackRepository = quizRepository;
        this.quizTypeRepository = quizTypeRepository;
        this.translateQuizRepository = translateQuizRepository;
    }

    public List<QuizPack> getQuizPacks() {
        return quizPackRepository.findAll();
    }

    public void addNewQuizPack(QuizPack quizPack, Long userId) {
        Optional<UserTable> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new IllegalStateException("UserTable with id (" + userId + ") does not exist");
        }
        Optional<QuizPack> quizOptional = quizPackRepository.findQuizPackByTitleAndCreator(quizPack.getTitle(), userOptional.get());
        if (quizOptional.isPresent()) {
            throw new IllegalStateException("UserTable " + userOptional.get().getUsername() + " already has a quiz with title '" + quizOptional.get().getTitle() + "'");
        }
        quizPack.setCreated(LocalDate.now());
        userOptional.get().addQuizPack(quizPack);
        quizPackRepository.save(quizPack);
    }

    public QuizPack getQuizPackById(Long id) {
        return quizPackRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "The quiz pack with id (" + id + ") is not in the database"
                ));
    }

    public void addQuizToPack(Long packId, TranslateQuiz quiz) {
        Optional<QuizPack> pack = quizPackRepository.findById(packId);
        if (pack.isEmpty()) {
            throw new IllegalStateException("Quiz pack with id (" + packId + ") does not exist");
        }
        translateQuizRepository.save(quiz);
        pack.get().addQuiz(quiz);
        quizPackRepository.save(pack.get());
    }

    public void createPackWithQuizzes(CreatePackWithQuizzesRequest request, Long userId) {
        Optional<UserTable> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new IllegalStateException("User with id (" + userId + ") does not exist");
        }
        var pack = request.getQuizPack();
        pack.setCreated(LocalDate.now());
        userRepository.save(user.get());
        System.out.println(pack);
//        quizPackRepository.save(pack);

        translateQuizRepository.saveAll(request.getTranslateQuizList());
        for (TranslateQuiz quiz: request.getTranslateQuizList()) {
            pack.addQuiz(quiz);
        }
        System.out.println(pack);
        user.get().addQuizPack(pack);
        quizPackRepository.save(pack);
    }

    public List<QuizPack> getQuizPacksByUserId(Long userId) {
        Optional<UserTable> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new IllegalStateException("User with id (" + userId + ") does not exist");
        }
        return user.get().getQuizPacks();
    }
}
