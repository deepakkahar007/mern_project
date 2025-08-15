import { Router } from "express";
import { LoginUser } from "../controller/Auth.js";

export const AuthRouter = Router();

AuthRouter.route("/login").post(LoginUser);
