import express from "express";

const clubRouter = express.Router();

clubRouter.get("/", (req, res) => {
  res.send("Here are all the clubs");
});

clubRouter.get("/:id", (req, res) => {
  res.send("Here is the particular club");
});

clubRouter.post("/:id/interviews/apply", (req, res) => {
    res.send("Applied for the club")
});

export default clubRouter;
