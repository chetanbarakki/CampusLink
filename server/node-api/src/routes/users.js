import express from "express";

const userRouter = express.Router();

userRouter.get("/me", (req, res) => {
  res.send("Here is your profile");
});


export default userRouter;
