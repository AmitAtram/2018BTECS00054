var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "AWAMAD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM club", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});