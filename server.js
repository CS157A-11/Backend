

var mysql = require('mysql2');
var express = require('express');
var testRouter = express();

//graph arrays 
var moodHabit = []; 

//create connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jaishree1',
  database: 'habit_tracker'
});

//sql query
var query = "SELECT Users_completes_habits.completed_date, Moods_of_the_day.mood_name, GROUP_CONCAT(DISTINCT Habits.name) AS habits FROM Users_completes_habits JOIN habits USING (habit_id), Moods_of_the_day WHERE Users_completes_habits.user_name LIKE 'clarke.w' AND Users_completes_habits.completed_date = Moods_of_the_day.date GROUP BY completed_date ORDER BY completed_date" ;
//fetch data
/*
testRouter.get('/', function(req, res) {
  connection.query (query, function(err, rows, fields) { 
    if (err) throw err;
    formatData(rows); 
    res.send(jsonArray); 
    console.log(jsonArray);
  }); 
}); 
*/ 

//fetch data 
 connection.connect(function(err) {
  if (err) throw err;  
  connection.query(query, function(err, resultArr, fields) {
    if (err) throw err;
    formatData(resultArr); 
    //console.log(resultArr);
  });
}); 
 
//formatting for date/mood/habits 
function formatData(resultArr) {
  for (var i = 0; i < resultArr.length; i++) {
     d = resultArr[i].completed_date.toString();  
     mood = resultArr[i].mood_name.toString(); 
     habit = resultArr[i].habits.toString(); 
    moodHabit[i] = 'ON: ' + d + ', YOUR MOOD WAS: ' + mood + ' AND YOU COMPLETED: ' + habit;
  } 
  console.log(moodHabit.join('\r\n')); 
}; 
