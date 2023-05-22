import { Sequelize } from "sequelize";
import config from "./config.mjs";

const {
  database: db,
  database_host,
  database_name,
  database_password,
  database_user,
} = config;

const database = new Sequelize(
  database_name,
  database_user,
  database_password,
  {
    host: database_host,
    dialect: db,
  }
);

export default database;
