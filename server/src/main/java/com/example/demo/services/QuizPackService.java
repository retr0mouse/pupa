package com.example.demo.services;

import com.example.demo.keys.PackToQuizId;
import com.example.demo.models.*;
import com.example.demo.repositories.QuizPackRepository;
import com.example.demo.repositories.QuizTypeRepository;
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

    @Autowired
    public QuizPackService(QuizPackRepository quizRepository, UserRepository userRepository, QuizTypeRepository quizTypeRepository) {
        this.userRepository = userRepository;
        this.quizPackRepository = quizRepository;
        this.quizTypeRepository = quizTypeRepository;
    }

    public List<QuizPack> getQuizPacks() {
        return quizPackRepository.findAll();
    }

    public void addNewQuizPack(QuizPack quiz, Long userId) {
        Optional<UserTable> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new IllegalStateException("UserTable with id (" + userId + ") does not exist");
        }
        Optional<QuizPack> quizOptional = quizPackRepository.findQuizPackByTitleAndCreator(quiz.getTitle(), userOptional.get());
        if (quizOptional.isPresent()) {
            throw new IllegalStateException("UserTable " + userOptional.get().getUsername() + " already has a quiz with title '" + quizOptional.get().getTitle() + "'");
        }
        quiz.setCreated(LocalDate.now());
        userOptional.get().addQuizPack(quiz);
        quizPackRepository.save(quiz);
    }

    public QuizPack getQuizPackById(Long id) {
        return quizPackRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "The quiz pack with id (" + id + ") is not in the database"
                ));
    }

    public void addQuizToPack(Long packId, TranslateQuiz quiz) {
        System.out.println(";asldjflaskdjf");
    }
}
