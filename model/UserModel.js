import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    NPM: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    alamat: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;
