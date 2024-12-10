-- Step 1: Create a New Database
CREATE DATABASE UserManagement;

-- Step 2: Use the Newly Created Database
USE UserManagement;

-- Step 3: Create a Table to Store User Information
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,  -- Unique ID for each user
    name VARCHAR(100) NOT NULL,            -- User's name
    email VARCHAR(100) NOT NULL UNIQUE,    -- User's email (must be unique)
    password VARCHAR(255) NOT NULL,        -- Encrypted password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for user creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp for updates
);

-- Step 4: Insert Sample Data into the Table
INSERT INTO users (name, email, password) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'password123'),
('Bob Smith', 'bob.smith@example.com', 'password456'),
('Charlie Brown', 'charlie.brown@example.com', 'password789');

-- Step 5: Verify the Data
SELECT * FROM users;