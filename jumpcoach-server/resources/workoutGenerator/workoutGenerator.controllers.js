const { validationResult } = require("express-validator");
const Exercise = require("../exercise/exercise.model");

const patterns = [
  "bilateral-jump",
  "unilateral-jump",
  "lateral-quickness",
  "bound",
  "sprint",
  "bilateral-squat",
  "hip-hinge",
  "unilateral-squat",
  "knee-flexion",
  "lunge",
  "rotation",
  "anti-extension",
  "leg-raise",
  "crunch"
];

const workoutGeneratorController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    let allValidExercises;

    if (req.body.equipment === false) {
      if (req.body.beginner === true) {
        allValidExercises = await Exercise.find({
          beginner: true,
          equipment: false
        }).lean();
      } else if (req.body.beginner === false) {
        allValidExercises = await Exercise.find({
          equipment: false
        }).lean();
      }
    } else if (req.body.equipment === true) {
      if (req.body.beginner === true) {
        allValidExercises = await Exercise.find({
          beginner: true
        }).lean();
      } else if (req.body.beginner === false) {
        allValidExercises = await Exercise.find({}).lean();
      }
    }

    const modulatedExercises = patterns
      .map(pattern =>
        allValidExercises.filter(exercise => exercise.pattern === pattern)
      )
      .map(pattern => pattern[Math.floor(Math.random() * pattern.length)])
      .map(exercise => ({
        ...exercise,
        sets: exercise.baseSets + req.body.readiness
      }));

    console.log("generated workout!");

    res.status(200).send(modulatedExercises);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
};

module.exports = {
  workoutGeneratorController
};

// req.body.readiness: number: -1, 0, 1. add/sub from baseSets
// req.body.equipment: boolean
// req.body.beginner: boolean
