const { Router } = require("express");
const {
  GetAllUser,
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
} = require("../controller/User");

const UserRouter = Router();

UserRouter.route("/all").get(GetAllUser);
UserRouter.route("/create").post(CreateUser);
UserRouter.route("/:id").get(GetUser).patch(UpdateUser).delete(DeleteUser);

module.exports = { UserRouter };
