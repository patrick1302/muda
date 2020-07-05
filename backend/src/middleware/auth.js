const Donor = require("../models/donor");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async auth(req, res, next) {
    try {
      const token = req.header("Authorization").replace("Bearer", "").trim();
      const decoded = jwt.verify(token, "SECRET");
      const donor = await Donor.findOne({
        _id: decoded._id,
        "tokens.token": token,
      });
      if (!donor) {
        throw new Error();
      }
      req.token = token;
      req.donor = donor;

      next();
    } catch (e) {
      res.status(401).send("Please authenticate");
    }
  },
};
