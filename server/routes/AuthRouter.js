const { Router } = require("express");
const { LoginUser } = require("../controller/Auth");

const AuthRouter = Router();

AuthRouter.route("/login").post(LoginUser);

module.exports = { AuthRouter };
