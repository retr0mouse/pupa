package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {

//    @Bean
//    CommandLineRunner commandLineRunner(StudentRepository repository) {
//        return args -> {
//            var Daniil = new Student(
//                    0L,
//                    "Daniil",
//                    "daniil.sharin667@gmail.com",
//                    LocalDate.of(2001, Month.AUGUST, 2)
//            );
//
//            var mariam = new Student(
//                    0L,
//                    "Mariam",
//                    "mariam.notsharin@gmail.com",
//                    LocalDate.of(2000, Month.JANUARY, 5)
//            );
//
//            repository.saveAll(List.of(Daniil, mariam));
//        };
//    }
}
