
DROP DATABASE habit_tracker;
CREATE DATABASE habit_tracker;
use habit_tracker;
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS todos;
-- DROP TABLE IF EXISTS habits;
-- DROP TABLE IF EXISTS completedhabits;
-- DROP TABLE IF EXISTS completedtodos;
-- DROP TABLE IF EXISTS users_completedhabits;
-- DROP TABLE IF EXISTS users_completedtodos;
-- DROP TABLE IF EXISTS moods;
-- DROP TABLE IF EXISTS users_moods;
-- DROP TABLE IF EXISTS users_habits;
-- DROP TABLE IF EXISTS users_todos;

CREATE TABLE users (
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255)
);
CREATE TABLE todos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_active Boolean NOT NULL
);
CREATE TABLE habits (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_active Boolean NOT NULL
);
CREATE TABLE users_completes_habits (
    habit_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    completed_date Date NOT NULL,
    FOREIGN KEY (habit_id) REFERENCES habits(id),
    FOREIGN KEY (email) REFERENCES users(email),
    PRIMARY KEY (habit_id, email, completed_date)
);
CREATE TABLE users_completes_todos (
    todo_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    completed_date Date NOT NULL ,
    FOREIGN KEY (todo_id) REFERENCES todos(id),
    PRIMARY KEY (todo_id, email, completed_date)
);
CREATE TABLE moods (
    name VARCHAR(255) NOT NULL PRIMARY KEY,
    weight INT NOT NULL
);
CREATE TABLE moods_of_the_day (
    mood_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    date Date NOT NULL,
    mood_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (mood_name) REFERENCES moods(name)
);

CREATE TABLE users_moods (
    mood_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    FOREIGN KEY (mood_id) REFERENCES moods_of_the_day(mood_id),
    FOREIGN KEY (email) REFERENCES users(email),
    PRIMARY KEY (mood_id, email)
);

CREATE TABLE users_habits (
    habit_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    FOREIGN KEY (email) REFERENCES users(email),
    FOREIGN KEY (habit_id) REFERENCES habits(id),
    PRIMARY KEY (habit_id, email)
);
CREATE TABLE users_todos (
    email VARCHAR(255) NOT NULL,
    todo_id INT NOT NULL,
    FOREIGN KEY (email) REFERENCES users(email),
    FOREIGN KEY (todo_id) REFERENCES todos(id),
    PRIMARY KEY (todo_id, email)
);
