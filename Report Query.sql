SELECT Users_completes_habits.completed_date, Moods_of_the_day.mood_name, GROUP_CONCAT(DISTINCT Habits.name) AS habits
FROM Users_completes_habits JOIN habits USING (habit_id), Moods_of_the_day
WHERE Users_completes_habits.user_name LIKE 'clarke.w' AND Users_completes_habits.completed_date = Moods_of_the_day.date
GROUP BY completed_date
ORDER BY completed_date; 

SELECT date, mood_name 
FROM Moods_of_the_Day;

SELECT date, mood_name
FROM Moods_of_the_Day INNER JOIN Moods ON Moods_of_the_Day.mood_name = Moods.name 
WHERE Moods.weight <= 0
ORDER BY date; 

SELECT date, mood_name 
FROM Moods_of_the_day;

SELECT Moods_of_the_day.date AS date, GROUP_CONCAT(DISTINCT Habits.name) AS IncompleteHabits, Moods_of_the_day.mood_name
FROM Habits, Moods, Users_completes_habits, Moods_of_the_day 
WHERE date IN (SELECT Moods_of_the_day.date
				FROM Moods_of_the_day INNER JOIN Moods ON Moods_of_the_day.mood_name = Moods.name 
				WHERE Moods.weight < 1)
		AND Habits.habit_id NOT IN (SELECT habit_id FROM Users_completes_habits) 
        AND Users_completes_habits.user_name LIKE 'clarke.w'
GROUP BY date
ORDER BY date;

SELECT DISTINCT mood_name, COUNT(mood_name) as num
FROM Moods_of_the_Day
GROUP BY mood_name
ORDER BY num DESC;
