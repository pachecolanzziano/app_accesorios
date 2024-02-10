const DB_HOST = process.env.MYSQLHOST || "roundhouse.proxy.rlwy.net";
const DB_USER = process.env.MYSQLUSER || "root";
const DB_PASSWORD = process.env.MYSQLPASSWORD || "H--5Aa53212gAg5bfgAa1HAFEbE3CeDe";
const DB_NAME = process.env.MYSQLDATABASE || "railway";
const DB_PORT = process.env.MYSQLPORT || "33297";

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
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
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



