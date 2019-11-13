const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  baseSets: {
    type: Number,
    required: true,
    default: 3
  },
  // 0 means AMRAP
  baseReps: {
    type: Number,
    required: true,
    default: 8
  },
  description: {
    type: String,
    required: true
  },
  // genre: explosive, bilat-strength, unilat-strength, core
  genre: {
    type: String,
    required: true
  },
  // pattern: squat, hip hinge, lunge, horiz-jump, 1leg jump, sprint, etc.
  pattern: {
    type: String,
    required: true
  },
  // equipment: does it need equipment usually found in gyms?
  equipment: {
    type: Boolean,
    required: true
  },
  // beginner-friendly: true or false
  beginner: {
    type: Boolean,
    required: true
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
