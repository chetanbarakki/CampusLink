import express from "express";
import {
  handleGetClubs,
  handleGetClubById,
  handleApplyForClub,
  createClubController,
} from "../controllers/club.js";
import { authorizeRoles } from "../middlewares/authMiddleware.js";

const clubRouter = express.Router();

clubRouter.get("/", handleGetClubs);

clubRouter.get("/:id", handleGetClubById);

clubRouter.post("/:id/interviews/apply", handleApplyForClub);

clubRouter.post("/add", authorizeRoles("ADMIN", "USER"), createClubController);

export default clubRouter;
