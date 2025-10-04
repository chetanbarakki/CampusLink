import express from "express";

const eventRouter = express.Router();

eventRouter.get("/", (req, res) => {
  res.send("Here are all the events");
});

eventRouter.get("/:id", (req, res) => {
  res.send("Here is the particular event");
});

eventRouter.post("/create", (req, res) => {
  res.send("Event Created");
});

eventRouter.post("/:id/register", (req, res) => {
  res.send("Registered for the event");
});

export default eventRouter;
