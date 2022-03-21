package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // makes this class to serve REST endpoints
@RequestMapping(path = "api/v1/student")    // to map an endpoint
public class StudentController {    // api layer

    private final StudentService studentService;

    @Autowired  // dependency injection of a method parameter into the class field, because field is not an instance
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping // when the endpoint is reached, this method will be executed
    public List<Student> getStudents() {  // if you return a List, Spring will produce a JSON object
        return studentService.getStudents();
    }

    @PostMapping
    public void registerNewStudent(@RequestBody Student student) {  // map the student object that the client gives us
        studentService.addNewStudent(student);
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long studentId) {
        studentService.deleteStudent(studentId);
    }

    @PutMapping(path = "{studentId}")
    public void updateStudent(@PathVariable("studentId") Long studentId, @RequestParam(required = false) String name, @RequestParam(required = false) String email) {
        studentService.updateStudent(studentId, name, email);
    }
}
