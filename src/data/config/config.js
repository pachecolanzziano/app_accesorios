const DB_HOST = process.env.MYSQLHOST || "localhost";
const DB_USER = process.env.MYSQLUSER || "id21899018_wp_08f42e77b753f7e3498fb44f4ba6d1d2";
const DB_PASSWORD = process.env.MYSQLPASSWORD || "Karime33.";
const DB_NAME = process.env.MYSQLDATABASE || "id21899018_wp_08f42e77b753f7e3498fb44f4ba6d1d2";
const DB_PORT = process.env.MYSQLPORT || "4780";

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



