const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./routes/routes");
const puppeteer = require("puppeteer");

const app = express();

const PORT = 6060;

app.use(cors());
app.use(express.json());
app.use(Router);

mongoose.connect(
  "mongodb+srv://vidyutrenz:vidyutrenz@backend.7h6aomc.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});

app.get("/", (req, res) => {
  console.log("GET REQ");
  res.send("GETTING REQUEST SUCCESSFULLY");
});

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
});
