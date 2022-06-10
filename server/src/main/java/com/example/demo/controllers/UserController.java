package com.example.demo.controllers;

import com.example.demo.models.UserTable;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
    public List<UserTable> getAllUsers() {
        return userTableService.getAllUsers();
    }

    @GetMapping(value = "get", params = "id")
    public UserTable getUserById(@RequestParam Long id) {
        if (!id.toString().matches("^\\d+$")) {
            throw new IllegalStateException("Please provide an id");
        }
        return userTableService.getUserById(id);
    }

    @GetMapping(value = "getByJwt")
    public UserDetails getUsernameFromJwt() {
        return (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @PostMapping("add")
    public void addUser(@RequestBody UserTable user) {
        userTableService.addUser(user);
    }
}
