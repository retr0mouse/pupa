package com.example.demo.models;

import javax.persistence.*;

@Entity
@DiscriminatorColumn (name = "quiz_type")
@Inheritance (strategy = InheritanceType.SINGLE_TABLE)
public class Quiz {
    @Id // automatically determines the primary key
    @SequenceGenerator( // generate a sequence
            name = "mark_right_quiz_sequence",
            sequenceName = "mark_right_quiz_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mark_right_quiz_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;
}
