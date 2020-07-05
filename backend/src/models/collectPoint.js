const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectPointSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    cep: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CollectPoint = mongoose.model("CollectPoint", collectPointSchema);

module.exports = CollectPoint;
