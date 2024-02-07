const DB_HOST = process.env.MYSQLHOST || "127.0.0.1";
const DB_USER = process.env.MYSQLUSER || "root";
const DB_PASSWORD = process.env.MYSQLPASSWORD || "";
const DB_NAME = process.env.MYSQLDATABASE || "bd_project_sprints";
const DB_PORT = process.env.MYSQLPORT || "3306";

module.exports={
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "mysql"
  },
  "test":{
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "mysql"
  }
}
