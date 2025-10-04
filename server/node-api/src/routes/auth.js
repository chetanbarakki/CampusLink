import express from "express";
import {
  handleUserRegistration,
  handleUserLogin,
  handleUserLogout,
} from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", handleUserRegistration);

authRouter.post("/login", handleUserLogin);

authRouter.post("/logout", handleUserLogout);

export default authRouter;
