const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vertPoint = new Schema({
  vert: {
    type: Number,
    required: true,
    default: 0
  },
  standing: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const vertHistorySchema = new Schema({
  vertPoints: [vertPoint],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const VertHistory = mongoose.model("VertHistory", vertHistorySchema);

module.exports = VertHistory;
