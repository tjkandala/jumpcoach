const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { addExerciseController } = require("./exercise.controller");

// name
// basereps
// basesets
// description
// genre
// pattern
// equipment
// difficulty

const addExerciseValidations = [
  check("name", "name is required")
    .not()
    .isEmpty(),
  check("baseReps", "baseReps is required")
    .not()
    .isEmpty(),
  check("baseSets", "baseSets is required")
    .not()
    .isEmpty(),
  check("description", "description is required")
    .not()
    .isEmpty(),
  check("genre", "genre is required")
    .not()
    .isEmpty(),
  check("pattern", "pattern is required")
    .not()
    .isEmpty(),
  check("equipment", "equipment is required")
    .not()
    .isEmpty(),
  check("beginner", "beginner T/F is required").isBoolean()
];

router.post("/add", addExerciseValidations, addExerciseController);

module.exports = router;
