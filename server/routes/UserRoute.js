import { Router } from "express";
import { GetAllUser } from "../controller/User.js";

export const UserRouter = Router();

UserRouter.route("/").get(GetAllUser);
