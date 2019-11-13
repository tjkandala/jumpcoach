const { validationResult } = require("express-validator");
const Exercise = require("./exercise.model");

const addExerciseController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log({ ...req.body });

    const newExercise = new Exercise({
      ...req.body
    });

    await newExercise.save();

    res.status(200).send(newExercise);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
};

module.exports = {
  addExerciseController
};
