var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "mydb"

});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});