const express = require("express");
const app = express();
const userModel = require("../models/UserModel");

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

app.post("/seen-msg", async (req, res) => {
  try {
    const userId = req.body.user;
    console.log(userId);
    let user = await userModel.findOne({
      user: userId,
    });
    console.log(user.seenMsg);
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

app.get("/images", (req, res) => {
  const images = [
    "https://i.postimg.cc/RZpdqCxy/1-1.jpg",
    "https://i.postimg.cc/x1ZGnsKS/1-2.jpg",
    "https://i.postimg.cc/SR47HJc2/2-1.jpg",
    "https://i.postimg.cc/J415qH1S/2-2.jpg",
    "https://i.postimg.cc/rFQCYyss/3.jpg",
    "https://i.postimg.cc/wM9L0ndD/4.jpg",
    "https://i.postimg.cc/Kc75BDyn/5-1.jpg",
    "https://i.postimg.cc/Zq1LFfRL/5-2.jpg",
    "https://i.postimg.cc/xCDKbcxx/5-3.jpg",
    "https://i.postimg.cc/c44fYqhS/5-4.jpg",
    "https://i.postimg.cc/xjPKcjK5/5-5.jpg",
    "https://i.postimg.cc/5N7LSPKF/5-6.jpg",
    "https://i.postimg.cc/y8D9QF2p/5-7.jpg",
    "https://i.postimg.cc/wBJNH9qh/6.jpg",
    "https://i.postimg.cc/K8CTd12G/6-1.jpg",
    "https://i.postimg.cc/vmR10CrD/7-1.jpg",
    "https://i.postimg.cc/3JddY39d/7-2.jpg",
    "https://i.postimg.cc/8P9sCxnw/8-1.jpg",
    "https://i.postimg.cc/hv3vTY4D/8-2.jpg",
    "https://i.postimg.cc/zGhvHpsN/8-3.jpg",
    "https://i.postimg.cc/YSw96Y7W/8-4.jpg",
    "https://i.postimg.cc/mrQPJVjj/8-5.jpg",
    "https://i.postimg.cc/N070pFGP/8-6.jpg",
    "https://i.postimg.cc/mDLgq4tZ/sports-1.jpg",
    "https://i.postimg.cc/tTB4Gcx3/sports-2.jpg",
    "https://i.postimg.cc/5N3ndq7x/sports-3.jpg",
  ];
  try {
    res.status(200).send({ images: images });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
