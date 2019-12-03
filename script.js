$(document).ready(function() {
  var mysql = require('mysql2');
  var express = require('express');
  var testRouter = express();

  //graph arrays
  var moodNum = [];

  //create connection to db
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jaishree1',
    database: 'habit_tracker'
  });

  //sql query
  var query2 = 'SELECT DISTINCT mood_name, COUNT(mood_name) as num FROM Moods_of_the_Day GROUP BY mood_name ORDER BY num DESC;';

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
      mood = resultArr[i].mood_name.toString();
      num = resultArr[i].num;
      moodNum[i] = mood + ': ' + num;
    }
    console.log(moodNum.join('\r\n'));
  };

  var charData = {
    labels: Moods,
    datasets : [
      {
        label: 'Moods',
        backgroundColor: 'rgba(400, 400, 400, 0.80)',
        borderColor: 'rgba(400, 400, 400, 0.80)',
        hoverBackgroundColor: 'rgba(400, 400, 400, 1)',
        data: num
      }
    ]
  };

  var ctx = $("#mycanvas");
  var donut = new Chart(ctx, {
      type: "doughnut",
      data: charData
  });

});
