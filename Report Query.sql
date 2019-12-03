SELECT Users_completes_habits.completed_date, Moods_of_the_day.mood_name, GROUP_CONCAT(DISTINCT Habits.name) AS habits
FROM Users_completes_habits JOIN habits USING (habit_id), Moods_of_the_day
WHERE Users_completes_habits.user_name LIKE 'clarke.w' AND Users_completes_habits.completed_date = Moods_of_the_day.date
GROUP BY completed_date
ORDER BY completed_date; 

