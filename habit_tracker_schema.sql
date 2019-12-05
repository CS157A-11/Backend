 DROP DATABASE IF EXISTS habit_tracker;
 CREATE DATABASE Habit_tracker;
 USE Habit_tracker; 
 
CREATE TABLE Users (
    name VARCHAR(225),
    user_name VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255),
    email VARCHAR(255)
);
CREATE TABLE Todos (
    todo_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_active Boolean NOT NULL
);
CREATE TABLE Habits (
    habit_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_active Boolean NOT NULL
);
CREATE TABLE Users_completes_habits (
    habit_id INT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    completed_date Date NOT NULL,
    FOREIGN KEY (habit_id) REFERENCES Habits(habit_id),
    FOREIGN KEY (user_name) REFERENCES Users(user_name),
    PRIMARY KEY (habit_id, user_name, completed_date)

);
CREATE TABLE Users_completes_todos (
    todo_id INT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    completed_date Date NOT NULL ,
    FOREIGN KEY (todo_id) REFERENCES Todos(todo_id),
    PRIMARY KEY (todo_id, user_name, completed_date)
);
CREATE TABLE moods (
    name VARCHAR(255) NOT NULL PRIMARY KEY,
    weight INT NOT NULL
);
CREATE TABLE Moods_of_the_day (
    mood_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    date Date NOT NULL,
    mood_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (mood_name) REFERENCES Moods(name)
);

CREATE TABLE Users_have_moods (
    mood_id INT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (mood_id) REFERENCES Moods_of_the_day(mood_id),
    FOREIGN KEY (user_name) REFERENCES Users(user_name),
    PRIMARY KEY (mood_id, user_name)
);

CREATE TABLE Users_create_habits (
    habit_id INT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_name) REFERENCES Users(user_name),
    FOREIGN KEY (habit_id) REFERENCES Habits(habit_id),
    PRIMARY KEY (habit_id, user_name)
);

CREATE TABLE Users_create_todos (
	todo_id INT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_name) REFERENCES Users(user_name),
    FOREIGN KEY (todo_id) REFERENCES Todos(todo_id),
    PRIMARY KEY (todo_id, user_name)
);

    