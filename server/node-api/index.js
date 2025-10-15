import express from "express";
import dotenv from "dotenv";
import apiRouter from "./src/routes/api.js";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/mongoConfig.js";
import cors from "cors";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow only requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    credentials: true, // Allow sending cookies and HTTP authentication
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});
