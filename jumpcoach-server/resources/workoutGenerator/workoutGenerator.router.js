const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  workoutGeneratorController
} = require("./workoutGenerator.controllers");

const workoutGeneratorValidations = [
  check("beginner", "beginner is required, boolean").isBoolean(),
  check("equipment", "equipment is required, boolean").isBoolean(),
  check("readiness", "readiness is required, numeric").isNumeric()
];

router.post("/", workoutGeneratorValidations, workoutGeneratorController);

module.exports = router;
