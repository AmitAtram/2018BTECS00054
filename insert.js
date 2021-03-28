var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "AWAMAD"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "insert into club (club_id, club_name, club_head) VALUES ?";
  var values = [
      ['1', 'Real Mardrid', 'CR-7'],
    ['2', 'Barcelona', 'Leo Messi'],
    [3, 'Manchester United', 'Rooney'],
    [4, 'Saint Paris', 'Neymar jr'],
    [5, 'Juventus', 'Dybala']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Data inserted in club table successfully");
  });
});