require("../db/moongose");

const CollectPoint = require("../models/collectPoint");

module.exports = {
  async create(req, res) {
    const collectPoint = new CollectPoint(req.body);

    try {
      await collectPoint.save();
      res.status(201).send(collectPoint);
    } catch (e) {
      res.status(400).send(e);
    }
  },

  async list(req, res) {
    try {
      const collectPoint = await CollectPoint.find();
      res.send(collectPoint);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async delete(req, res) {
    try {
      req.collectPoint.remove();
      res.status(200).send(req.collectPoint);
    } catch (e) {
      res.status(500).send();
    }
  },
};
