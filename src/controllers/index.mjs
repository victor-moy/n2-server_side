import { Op } from "sequelize";
import carModel from "../database/model/carModel.mjs";

async function findAll(req, res) {
  try {
    const cars = await carModel.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).send("Falha ao buscar listagem de veículos cadastrados");
  }
}

async function createCar(req, res) {
  const { preco_veiculo, placa_veiculo, modelo_veiculo } = req.body;

  try {
    const createdCar = await carModel.create({
      modelo_veiculo,
      placa_veiculo,
      preco_veiculo,
    });

    res.json(createdCar);
  } catch (error) {
    res.status(500).send("Falha ao cadastrar veículo");
  }
}

async function editCar(req, res) {
  const { preco_veiculo, placa_veiculo, modelo_veiculo } = req.body;

  const { id } = req.params;

  try {
    await carModel.update(
      {
        modelo_veiculo,
        placa_veiculo,
        preco_veiculo,
      },
      {
        where: {
          id,
        },
      }
    );

    const editedCar = await carModel.findByPk(id);

    res.json(editedCar);
  } catch (error) {
    res.status(500).send("Falha ao editar dados do veículo");
  }
}

async function deleteCar(req, res) {
  const { id } = req.params;

  try {
    await carModel.destroy({
      where: {
        id,
      },
    });

    res.send("Veículo removido com sucesso!");
  } catch (error) {
    res.status(500).send("Falha ao excluir veículo");
  }
}

async function findCarByPlate(req, res) {
  const { placa } = req.params;
  try {
    const listCars = await carModel.findAll({
      where: {
        placa_veiculo: {
          [Op.substring]: placa,
        },
      },
    });

    res.json(listCars);
  } catch (error) {
    res.status(500).send("Falha ao buscar veículo");
  }
}

export { findAll, createCar, deleteCar, editCar, findCarByPlate };
