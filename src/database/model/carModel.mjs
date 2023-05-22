import { Sequelize } from "sequelize";
import database from "../index.mjs";

export default database.define("car", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  placa_veiculo: {
    type: Sequelize.STRING(7),
    allowNull: false,
    unique: true,
  },
  modelo_veiculo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco_veiculo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
