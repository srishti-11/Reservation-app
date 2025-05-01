
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// Route imports (from api/routes/)
// import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import hotelsRoute from "./api/routes/hotels.js";
import roomsRoute from "./api/routes/rooms.js";

const app = express();
dotenv.config();

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected.");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected.");
});

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// API Routes
// app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Root route test
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Start Server
app.listen(8800, () => {
  connect();
  console.log("Backend server running on http://localhost:8800");
});
