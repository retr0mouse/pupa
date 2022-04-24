package com.example.demo.quiz_pack;

import com.example.demo.user_table.UserTable;
import com.example.demo.user_table.UserTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service  // make this a Spring Bean. Could be simply a "@Component", but this way its more specific
public class QuizPackService {   // service layer

    private final QuizPackRepository quizRepository;
    private final UserTableRepository userRepository;

    @Autowired  // dependency injection
    public QuizPackService(QuizPackRepository quizRepository, UserTableRepository userRepository) {
        this.userRepository = userRepository;
        this.quizRepository = quizRepository;
    }

    public List<QuizPack> getQuizPacks() {
        return quizRepository.findAll();
    }

    public void addNewQuizPack(QuizPack quiz, Long userId) {
        Optional<UserTable> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new IllegalStateException("UserTable with id (" + userId + ") does not exist");
        }
        Optional<QuizPack> quizOptional = quizRepository.findQuizPackByTitleAndUser(quiz.getTitle(), userOptional.get());
        if (quizOptional.isPresent()) {
            throw new IllegalStateException("User " + userOptional.get().getUsername() + " already has a quiz with title '" + quizOptional.get().getTitle() + "'");
        }
        quiz.setCreated(LocalDate.now());
        userOptional.get().addQuizPack(quiz);
        quizRepository.save(quiz);
    }

    public QuizPack getQuizPackById(Long id) {
        return quizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "The quiz pack with id (" + id + ") is not in the database"
                ));
    }
}
