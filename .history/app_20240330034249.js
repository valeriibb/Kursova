var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "mydb"

});



con.connect(function(err) {
  if (err) throw err;
  con.query("
  CREATE TABLE Apartments (
      id_apartments INTEGER NULL,
      id_floor INTEGER NOT NULL,
      id_owner INTEGER NOT NULL,
      PRIMARY KEY (id_apartments),
      FOREIGN KEY (id_floor) REFERENCES Floor(id_floor),
      FOREIGN KEY (id_owner) REFERENCES Owner(id_owner)
  );
  
  CREATE TABLE Area (
      area_name VARCHAR(20) NULL,
      id_area INTEGER NULL,
      PRIMARY KEY (id_area)
  );
  
  CREATE TABLE Characteristic (
      id_characteristic INTEGER NULL,
      id_apartments INTEGER NOT NULL,
      num_room INTEGER NULL,
      square INTEGER NULL,
      PRIMARY KEY (id_characteristic),
      FOREIGN KEY (id_apartments) REFERENCES Apartments(id_apartments)
  );
  
  CREATE TABLE Floor (
      id_floor INTEGER NULL,
      num_floor INTEGER NULL,
      id_house INTEGER NOT NULL,
      id_area INTEGER NOT NULL,
      PRIMARY KEY (id_floor),
      FOREIGN KEY (id_house, id_area) REFERENCES House(id_house, id_area)
  );
  
  CREATE TABLE House (
      id_house INTEGER NULL,
      id_area INTEGER NOT NULL,
      PRIMARY KEY (id_house, id_area),
      FOREIGN KEY (id_area) REFERENCES Area(id_area)
  );
  
  CREATE TABLE Information (
      id_information INTEGER NULL,
      num_floors INTEGER NULL,
      num_apartments INTEGER NULL,
      id_house INTEGER NOT NULL,
      id_area INTEGER NOT NULL,
      PRIMARY KEY (id_information),
      FOREIGN KEY (id_house, id_area) REFERENCES House(id_house, id_area)
  );
  
  CREATE TABLE Owner (
      id_owner INTEGER NULL,
      name_owner VARCHAR(20) NULL,
      num_appartments INTEGER NULL,
      PRIMARY KEY (id_owner)
  );
  
  CREATE TABLE Room (
      id_room INTEGER NULL,
      s_room INTEGER NULL,
      id_apartments INTEGER NOT NULL,
      PRIMARY KEY (id_room),
      FOREIGN KEY (id_apartments) REFERENCES Apartments(id_apartments)
  );
  '", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});