import express from "express";
import {
  handleGetEvents,
  handleGetEventById,
  handleCreateEvent,
  handleRegisterEvent,
} from "../controllers/event.js";
import {authorizeRoles} from "../middlewares/authMiddleware.js"

const eventRouter = express.Router();

eventRouter.get("/", handleGetEvents);

eventRouter.get("/:id", handleGetEventById);

eventRouter.post("/:id/register", handleRegisterEvent);

eventRouter.post("/create", authorizeRoles("ADMIN", "CLUB_LEADER"), handleCreateEvent);

export default eventRouter;
