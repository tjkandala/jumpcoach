const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  vertHistory: {
    type: Schema.Types.ObjectId,
    ref: "VertHistory",
    default: null
  },
  completedWorkouts: [{ type: Schema.Types.ObjectId, ref: "CompletedWorkout" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
