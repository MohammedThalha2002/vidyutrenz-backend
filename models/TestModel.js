const mongoose = require("mongoose");

const TestSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  price: {
    type: Array,
    required: true,
  },
});

const Test = mongoose.model("testing", TestSchema);

module.exports = Test;
