import express from "express";
import eventRouter from "./events.js";
import authRouter from "./auth.js";
import clubRouter from "./clubs.js";
import userRouter from "./users.js";
import verifyToken from "../middlewares/verifyToken.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/events", verifyToken, eventRouter);
apiRouter.use("/users", verifyToken, userRouter);
apiRouter.use("/clubs", verifyToken, clubRouter);

export default apiRouter;
