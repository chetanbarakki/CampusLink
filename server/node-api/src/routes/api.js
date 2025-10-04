import express from "express";
import eventRouter from "./events.js";
import authRouter from "./auth.js";
import clubRouter from "./clubs.js";
import userRouter from "./users.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/events", eventRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/clubs", clubRouter);

export default apiRouter;
