  var mysql = require('mysql2');
  var express = require('express');
  var testRouter = express();

  //graph arrays
  var mood = [];
  var num = [];
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

  //get data from db
  testRouter.get('/data', function(req, res) {
    if (err) throw err;
    connection.query(query2, function(err, resultArr, fields) {
      if (err) throw err;
      format2(resultArr);
      res.send(moodNum);
    });
  });

  //formatting for date/mood
  function format2(resultArr) {
    for(var i = 0; i < resultArr.length; i++)
    {
      mood[i] = resultArr[i].mood_name.toString();
      num[i] = resultArr[i].num;
      //moodNum[i] = mood + ': ' + num;
    }
    moodNum = [mood, num];
    console.log(moodNum.join('\r\n'));
  };

  var ctx = document.getElementById("mycanvas").getContext('2d');
  var mychart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: mood,
        datasets : [
          {
            label: "Moods",
            backgroundColor: ["red", "lightgreen","skyblue","orange","purple", "black", "yellow"],
            borderColor: 'rgba(400, 400, 400, 0.80)',
            //hoverBackgroundColor: 'rgba(400, 400, 400, 1)',
            data: num
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Your Moods Over This Month'
        }
      }
  });
