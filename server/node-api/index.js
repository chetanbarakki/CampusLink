import express from "express";
import dotenv from "dotenv";
import apiRouter from "./src/routes/api.js";
import cookieParser from "cookie-parser";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});
