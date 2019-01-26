var mysql = require("mysql");



var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ydn581tni2s14uba",
    password: "fcte0rhslllz2r2x",
    port: "3306",
    database: "w60y0tzv3iht5lr4"

      // host: "localhost",
      // port: 3306,
      // user: "root",
      // password: "root",
      // database: "burgers_db"


  });
}


connection.connect();

module.exports = connection;



// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;
