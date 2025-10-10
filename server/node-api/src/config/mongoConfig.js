// src/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const MONGO_URI = process.env.MONGO_URI;

export default async function connectDB() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI not set in .env");
  }

  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected:", mongoose.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }

  // Optional: event listeners
  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });
}
