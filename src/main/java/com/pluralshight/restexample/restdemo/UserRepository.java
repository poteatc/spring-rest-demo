package com.pluralshight.restexample.restdemo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//Create a repository interface to interact with the User table.
public interface UserRepository extends JpaRepository<User, Long> {
     Optional<User> findByEmail(String email);
}
