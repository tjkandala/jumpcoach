// logic for recording a completed workout
const express = require("express");
const router = express.Router();
const {
  completedWorkoutController,
  allUserCompletedWorkoutsController
} = require("./completedWorkout.controller");
const { check } = require("express-validator");

const completedWorkoutValidations = [
  check("progress")
    .not()
    .isEmpty()
];

router.post("/", completedWorkoutValidations, completedWorkoutController);

router.get("/all", allUserCompletedWorkoutsController);

module.exports = router;
