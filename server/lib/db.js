const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "user", "user123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
