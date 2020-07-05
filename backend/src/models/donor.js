const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validation = require("validator");
const jwt = require("jsonwebtoken");
const Book = require("./Book");
require("dotenv").config();

const donorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          if (!validation.isEmail(value)) {
            throw new Error("Must be a valid email ");
          }
        },
      },
    },
    password: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      validate: {
        validator: function (value) {
          if (value.length < 5) {
            throw new Error("Password must contain at least 5 characters");
          }
        },
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

donorSchema.virtual("books", {
  ref: "Book",
  localField: "_id",
  foreignField: "owner",
});

donorSchema.methods.toJSON = function () {
  const donor = this.toObject();

  delete donor.password;
  delete donor.tokens;

  return donor;
};

donorSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET);

  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

donorSchema.statics.findByCredentials = async (email, password) => {
  const donor = await Donor.findOne({ email, password });

  if (!donor) {
    throw new Error();
  }

  return donor;
};

donorSchema.pre("remove", async function (next) {
  await Book.deleteMany({ owner: this._id });
  next();
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
