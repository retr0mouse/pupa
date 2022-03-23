package com.example.demo.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service  // make this a Spring Bean. Could be simply a "@Component", but this way its more specific
public class QuizService {   // service layer

    private final QuizRepository quizRepository;

    @Autowired  // dependency injection
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }

    public void addNewQuiz(Quiz quiz) {
        Optional<Quiz> quizOptional = quizRepository.findQuizByTitle(quiz.getTitle());
        if (quizOptional.isPresent()) {
            throw new IllegalStateException("title taken");
        }
        quizRepository.save(quiz);
    }

//    @Transactional  // with this entity goes to managed state
//    public void updateStudent(Long studentId, String name, String email) {
//        Student student = studentRepository.findById(studentId)
//                .orElseThrow(() -> new IllegalStateException(
//                        "student with id " + studentId + " does not exist"
//                ));
//        if (name != null && name.length() > 0 && !Objects.equals(student.getName(), name)) {
//            student.setName(name);
//        }
//
//        if (email != null && email.length() > 0 && !Objects.equals(student.getEmail(), email)) {
//            Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);
//            if (studentOptional.isPresent()) {
//                throw new IllegalStateException("email taken");
//            }
//            student.setEmail(email);
//        }
//    }
}
