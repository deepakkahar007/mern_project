const Express = require("express");
const { sequelize } = require("./lib/db.js");
const { UserRouter } = require("./routes/UserRoute.js");
const { AuthRouter } = require("./routes/AuthRouter.js");
const { AdminAuthMiddleware } = require("./middleware/AuthMiddleware.js");

require("dotenv").config();

const server = Express();

const port = process.env.PORT || 3000;

server.use(Express.json()); // for parsing application/json
server.use(Express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

server.use("/api/v1/auth", AuthRouter);
// server.use("/api/v1/user", AdminAuthMiddleware, UserRouter);
server.use("/api/v1/user", UserRouter);

const startServer = () => {
  try {
    server.listen(port, async () => {
      try {
        await sequelize.sync({ alter: true, benchmark: true }).authenticate();

        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    });
  } catch (err) {
    throw new Error(err);
  }
};

startServer();
