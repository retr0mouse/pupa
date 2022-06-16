package com.example.demo.repositories;

import com.example.demo.models.QuizType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizTypeRepository extends JpaRepository<QuizType, Long> {
}
