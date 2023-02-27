//REQUIRE .ENV & MYSQL
require("dotenv").config();
const {createConnection} = require("mysql");

// CONNECTION VARIABLE
let connection = createConnection({
    host: process.env.DBhost,
    user: process.env.DBuser,
    password: process.env.DBpassword,
    port: process.env.DBport,
    database: process.env.DBName,
    multipleStatements: true,
});
module.exports = connection;