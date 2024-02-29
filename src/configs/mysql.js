const mysql = require("mysql");
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const connectMysql = () => {
  const connect = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });

  connect.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
  });

  return connect;
};

const connect = connectMysql();

module.exports = { connectMysql, connect };
