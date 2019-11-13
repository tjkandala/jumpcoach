const CompletedWorkout = require("./completedWorkout.model");
const { validationResult } = require("express-validator");

const completedWorkoutController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const newCompletedWorkout = new CompletedWorkout({
      workout: req.body.progress,
      user: req.user.id
    });

    await newCompletedWorkout.save();

    res.status(200).json(newCompletedWorkout);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
};

const allUserCompletedWorkoutsController = async (req, res) => {
  try {
    console.log("sync attempt");

    const userCompletedWorkouts = await CompletedWorkout.find({
      user: req.user.id
    });

    res.json(userCompletedWorkouts);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
};

module.exports = {
  completedWorkoutController,
  allUserCompletedWorkoutsController
};
