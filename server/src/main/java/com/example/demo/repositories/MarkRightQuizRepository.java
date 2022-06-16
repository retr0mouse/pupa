package com.example.demo.repositories;

import com.example.demo.models.MarkRightQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarkRightQuizRepository extends JpaRepository<MarkRightQuiz, Long> {
}
