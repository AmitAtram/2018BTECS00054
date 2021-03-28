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
  var sql = "CREATE TABLE club (club_id VARCHAR(300), club_name VARCHAR(300), club_head VARCHAR(300),club_count VARCHAR(300))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table named club created successfully");
  });
});