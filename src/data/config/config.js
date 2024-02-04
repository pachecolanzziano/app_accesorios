// const DB_HOST = process.env.DB_HOST || "127.0.0.1";
// const DB_USER = process.env.DB_USER || "root";
// const DB_PASSWORD = process.env.DB_PASSWORD || "";
// const DB_NAME = process.env.DB_NAME || "bd_project_sprints";
// const DB_PORT = process.env.DB_PORT || "3306";

const DB_HOST = process.env.DB_HOST || "monorail.proxy.rlwy.net";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "FBddG6C--DHeb-HafGDa51G3142c12c-";
const DB_NAME = process.env.DB_NAME || "railway";
const DB_PORT = process.env.DB_PORT || "49947";

module.exports={
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
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
    "dialect": "mysql"
  }
}
