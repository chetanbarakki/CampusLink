import express from "express";
import dotenv from "dotenv";

dotenv.config({quiet: true});

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening to PORT:${PORT}`);
});
