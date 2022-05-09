package com.example.demo.controllers;

import com.example.demo.models.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user_table")
public class UserController {
    private final UserService userTableService;

    @Autowired
    public UserController(UserService userTableService) {
        this.userTableService = userTableService;
    }

    @GetMapping("get")
    public List<User> getAllUsers() {
        return userTableService.getAllUsers();
    }

    @GetMapping(value = "get", params = "id")
    public User getUserById(@RequestParam Long id) {
        if (!id.toString().matches("^\\d+$")) {
            throw new IllegalStateException("Please provide an id");
        }
        return userTableService.getUserById(id);
    }

    @PostMapping("add")
    public void addUser(@RequestBody User user) {
        userTableService.addUser(user);
    }
}
