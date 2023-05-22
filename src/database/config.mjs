import dotenv from "dotenv";

dotenv.config();

export default {
  database: process.env.DB,
  database_host: process.env.DB_HOST,
  database_name: process.env.DB_NAME,
  database_user: process.env.DB_USER,
  database_password: process.env.DB_PASSWORD,
};
