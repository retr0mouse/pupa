package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {    // database layer
    // SELECT * FROM student WHERE email = ?;
    @Query("SELECT s FROM Student s WHERE s.email = ?1")    // where Student is a student class, which is annotated
    Optional<Student> findStudentByEmail(String email);
}
