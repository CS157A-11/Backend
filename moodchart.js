var mysql = require('mysql2');
var express = require('express');
var testRouter = express();

//graph arrays 
//var date = ''; 
//var mood = ''; 
var dateMood = []; 

//create connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jaishree1',
  database: 'habit_tracker'
});

//sql query
var query2 = 'SELECT date, mood_name FROM Moods_of_the_Day'; 

 
connection.connect(function(err) {
  if (err) throw err; 
  connection.query(query2, function(err, resultArr, fields) {
    if (err) throw err; 
    format2(resultArr);
  });
}); 

//formatting for date/mood 
function format2(resultArr) {
  for(var i = 0; i < resultArr.length; i++)
  {
    d = resultArr[i].date.toString(); 
    mood = resultArr[i].mood_name.toString(); 
    dateMood[i] = d + ': ' + mood; 
  }
  console.log(dateMood.join('\r\n'));
}; 

