package com.example.demo.services;

import com.example.demo.models.UserTable;
import com.example.demo.models.UserDetailsImpl;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    UserRepository userRepository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserTable user = userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("UserTable with username (" + username +") does not exist"));
        return UserDetailsImpl.build(user);
    }

    public UserDetails loadUserById(Long id) throws UsernameNotFoundException {
        UserTable user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("UserTable with id (" + id + ") does not exist"));
        return UserDetailsImpl.build(user);
    }
}
