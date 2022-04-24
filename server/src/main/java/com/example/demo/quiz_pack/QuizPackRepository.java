package com.example.demo.quiz_pack;

import com.example.demo.user_table.UserTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuizPackRepository extends JpaRepository<QuizPack, Long> {
    Optional<QuizPack> findQuizPackByTitleAndUser(String title, UserTable user);
}
