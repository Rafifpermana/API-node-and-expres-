import { Sequelize } from "sequelize";

const db = new Sequelize("api_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
