import { client } from "../../app";
import express from "express";

import { verifyToken } from "../../utils/auth";

const reportRouter = express.Router();
reportRouter.use(verifyToken);

reportRouter.get("/incompletehabitsfornegativemoods", (req, res, next) => {
  console.log("ss");
  const query =
    "SELECT GROUP_CONCAT(Moods_of_the_day.date) AS date, COUNT(DISTINCT Moods_of_the_day.date) AS incompleteHabits, Moods_of_the_day.mood_name AS negativeMoods FROM Habits, Moods, Users_completes_habits, Moods_of_the_day WHERE date IN(SELECT Moods_of_the_day.date FROM Moods_of_the_day INNER JOIN Moods ON Moods_of_the_day.mood_name = Moods.name WHERE Moods.weight < 1 and Moods_of_the_day.mood_id IN(SELECT mood_id FROM users_moods WHERE email =?)) AND Habits.id NOT IN(SELECT habit_id FROM Users_completes_habits) AND Users_completes_habits.email =? GROUP BY NegativeMoods ORDER BY date";
  client.query(query, [req.email, req.email], (e, r) => {
    if (e) throw e;
    res.json(r);
  });
});

export { reportRouter };
