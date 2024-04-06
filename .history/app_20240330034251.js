var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "mydb"

});



con.connect(function(err) {
  if (err) throw err;
  con.query("", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});