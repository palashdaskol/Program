var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Passw0rd",
  database: "Family"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "Select * from Channel";
    con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
