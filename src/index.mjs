import express from "express";
import cors from "cors";
import routes from "./routes/index.mjs";
import database from "./database/index.mjs";
import dotenv from "dotenv";

dotenv.config();

const API_PORT = process.env.API_PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(API_PORT, () => {
  console.log(`Servidor iniciado na porta ${API_PORT}`);
});

database.sync().then(() => console.log("Banco de dados conectado"));
