const express = require("express");
const app = express();
const userModel = require("../models/UserModel");
const TestModel = require("../models/TestModel");

app.post("/add_user", async (req, res) => {
  try {
    console.log(req.body);
    const query = { user: req.body.user };
    const update = { $set: req.body };
    const options = { upsert: true };
    await userModel.updateOne(query, update, options);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

app.get("/seen-msg", (req, res) => {
  try {
    console.log(req.body);
    let user = userModel.findOne({
      user: req.body.user,
    });
    console.log(user);
    res.status(200).send({ seenMsg: user.seenMsg });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/update-seen-msg", async (req, res) => {
  try {
    console.log(req.body);
    const query = { user: req.body.user };
    const update = { $set: { seenMsg: req.body.seenMsg } };
    const options = { upsert: true };
    await userModel.updateOne(query, update, options);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = app;
