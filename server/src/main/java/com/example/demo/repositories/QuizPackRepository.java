package com.example.demo.repositories;

import com.example.demo.models.QuizPack;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuizPackRepository extends JpaRepository<QuizPack, Long> {
    Optional<QuizPack> findQuizPackByTitleAndUser(String title, User user);
}
