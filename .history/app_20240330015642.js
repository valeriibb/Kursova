var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "valeri",
  password: "12345678",
});

con.connect(function(err) {
  if (err
    ) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log("Connected to database!");
});
