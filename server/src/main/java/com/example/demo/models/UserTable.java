package com.example.demo.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity (name = "UserTable")
@Table (
        name = "user_table",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "user_table_username_unique",
                        columnNames = "username"
                )
        }
)
public class UserTable {
    @Id
    @SequenceGenerator(
            name = "user_table_sequence",
            sequenceName = "user_table_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_table_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;

    @Column (
            name = "username",
            nullable = false
    )
    private String username;

    @Column (
            name = "email",
            nullable = false
    )
    private String email;

    @Column (
            name = "first_name",
            nullable = false
    )
    private String firstname;

    @Column (
            name = "last_name",
            nullable = false
    )
    private String lastname;

    @Column (
            name = "password",
            nullable = false
    )
    private String password;

    @OneToMany (
            mappedBy = "creator",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    private List<QuizPack> quizPacks = new ArrayList<>();

    @ManyToMany (fetch = FetchType.EAGER)   // with lazy type authorization didn't work
    @JoinTable (
            name = "user_to_role",
            joinColumns = @JoinColumn(
                    name = "user_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id"
            )
    )
    private Set<Role> roles = new HashSet<>();

    public UserTable() {
    }

    public UserTable(String username, String email, String firstname, String lastname, String password) {
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }

    public UserTable(Long id, String username, String email, String firstname, String lastname, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }

    public void addQuizPack(QuizPack quizPack) {
        if (!this.quizPacks.contains(quizPack)) {
            this.quizPacks.add(quizPack);
            quizPack.setCreator(this);
        }
    }

    public void removeQuizPack(QuizPack quizPack) {
        if (this.quizPacks.contains(quizPack)) {
            this.quizPacks.remove(quizPack);
            quizPack.setCreator(null);
        }
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getPassword() {
        return password;
    }

    public List<QuizPack> getQuizPacks() {
        return quizPacks;
    }

    public void setQuizPacks(List<QuizPack> quizPacks) {
        this.quizPacks = quizPacks;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "UserTable{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", password='" + password + '\'' +
                ", quizPacks=" + quizPacks +
                ", roles=" + roles +
                '}';
    }
}
