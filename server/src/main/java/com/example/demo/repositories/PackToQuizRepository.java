package com.example.demo.repositories;

import com.example.demo.models.PackToQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackToQuizRepository extends JpaRepository<PackToQuiz, Long> {
}
