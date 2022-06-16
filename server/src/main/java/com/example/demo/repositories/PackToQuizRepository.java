package com.example.demo.repositories;

import com.example.demo.keys.PackToQuizId;
import com.example.demo.models.PackToQuiz;
import com.example.demo.models.QuizPack;
import com.example.demo.models.QuizType;
import com.example.demo.models.TranslateQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PackToQuizRepository extends JpaRepository<PackToQuiz, PackToQuizId> {
    Optional<PackToQuiz> findByQuizPackAndTranslateQuizAndQuizType(QuizPack pack, TranslateQuiz quiz, QuizType type);
}
