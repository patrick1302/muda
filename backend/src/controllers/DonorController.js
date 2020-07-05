require("../db/moongose");

const Donor = require("../models/donor");
const sharp = require("sharp");

module.exports = {
  async create(req, res) {
    const donor = new Donor(req.body);

    try {
      await donor.save();
      const token = await donor.generateAuthToken();
      res.status(201).send({ donor, token });
    } catch (e) {
      res.status(400).send(e);
    }
  },

  async list(req, res) {
    res.send(req.donor);
  },

  async logout(req, res) {
    try {
      req.donor.tokens = req.donor.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.donor.save();

      res.send();
    } catch (e) {
      res.status(500).send();
    }
  },

  async login(req, res) {
    try {
      const donor = await Donor.findByCredentials(
        req.body.email,
        req.body.password
      );
      const token = await donor.generateAuthToken();
      res.send({ donor, token });
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async delete(req, res) {
    try {
      req.donor.remove();
      res.status(200).send(req.donor);
    } catch (er) {
      res.status(500).send();
    }
  },
};
