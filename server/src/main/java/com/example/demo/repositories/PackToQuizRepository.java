package com.example.demo.repositories;

import com.example.demo.keys.PackToQuizId;
import com.example.demo.models.PackToQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PackToQuizRepository extends JpaRepository<PackToQuiz, PackToQuizId> {
}
