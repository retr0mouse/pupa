package com.example.demo.user_table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserTableService {
    private final UserTableRepository userTableRepository;

    @Autowired
    public UserTableService(UserTableRepository userTableRepository) {
        this.userTableRepository = userTableRepository;
    }

    public List<UserTable> getAllUsers() {
        return userTableRepository.findAll();
    }

    public UserTable getUserById(Long id) {
        return userTableRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "The user with id (" + id + ") does not exist"
                ));
    }

    public void addUser(UserTable user) {
        Optional<UserTable> userOptional = userTableRepository.findUserTableByUsername(user.getUsername());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("This user is already in the database");
        }
        userTableRepository.save(user);
    }
}
