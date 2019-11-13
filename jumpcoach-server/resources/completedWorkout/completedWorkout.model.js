const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const completedExerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // sets are unstructured
  recordedSets: [
    {
      type: String
    }
  ],
  exercise: { type: Schema.Types.ObjectId, ref: "Exercise" }
});

const completedWorkoutSchema = new Schema({
  workout: [completedExerciseSchema],
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

const CompletedWorkout = mongoose.model(
  "CompletedWorkout",
  completedWorkoutSchema
);

module.exports = CompletedWorkout;
