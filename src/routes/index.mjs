import express from "express";
import {
  createCar,
  deleteCar,
  editCar,
  findAll,
  findCarByPlate,
} from "../controllers/index.mjs";

const routes = express.Router();

routes.get("/veiculos", findAll);

routes.post("/veiculos", createCar);

routes.put("/veiculos/:id", editCar);

routes.delete("/veiculos/:id", deleteCar);

routes.get("/veiculos/:placa", findCarByPlate);

export default routes;
