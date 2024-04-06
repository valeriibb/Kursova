var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "yourdatabase" // Specify your database name here
});

con.connect(function(err) {
  if (err
    ) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log("Connected to database!");
});
