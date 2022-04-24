package com.example.demo.user_table;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserTableRepository extends JpaRepository<UserTable, Long> {
    public Optional<UserTable> findUserTableByUsername(String username);
}
