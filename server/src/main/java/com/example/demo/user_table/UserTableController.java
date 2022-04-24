package com.example.demo.user_table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user_table")
public class UserTableController {
    private final UserTableService userTableService;

    @Autowired
    public UserTableController(UserTableService userTableService) {
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

    @PostMapping("add")
    public void addUser(@RequestBody UserTable user) {
        userTableService.addUser(user);
    }
}
