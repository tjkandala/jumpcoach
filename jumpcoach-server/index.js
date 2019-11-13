const express = require("express");
const { connectDB } = require("./config/db");

const app = express();
var cors = require("cors");
const port = process.env.PORT || 4040;

// Connect DB
connectDB();

const userRouter = require("./resources/user/user.router");
const exerciseRouter = require("./resources/exercise/exercise.router");
const workoutGeneratorRouter = require("./resources/workoutGenerator/workoutGenerator.router");
const completedWorkoutRouter = require("./resources/completedWorkout/completedWorkout.router");
const { authMiddleware, authRouter } = require("./utils/auth");

// Middleware
app.use(cors());

app.use(express.json({ extended: false }));
// use authMiddleware for protected routes

// Routes
// to create a new user
app.use("/user", userRouter);
// to sign in
app.use("/auth", authRouter);
// to add an exercise to DB
app.use("/exercise", exerciseRouter);
// to generate workouts
app.use("/generate", workoutGeneratorRouter);
// to log completed workouts
app.use("/complete", authMiddleware, completedWorkoutRouter);

app.listen(port, () =>
  console.log(`tj's boilerplate listening on port ${port}`)
);

// todo: rate limiting
