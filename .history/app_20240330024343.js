var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "12345678"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

              