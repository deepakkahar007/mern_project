import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("test", "user", "user123", {
  host: "localhost",
  dialect: "mysql",
});
