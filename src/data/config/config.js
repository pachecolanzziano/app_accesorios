const DB_HOST = process.env.DB_HOST || "";
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "";
const DB_PORT = process.env.DB_PORT || "";

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
