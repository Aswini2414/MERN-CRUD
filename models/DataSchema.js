const mongoose = require("mongoose");
const validator = require("validator");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
        required: true,
    trim:true
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
      required: true,
      validate(value) {
          if (!validator.isEmail(value)) {
              throw new Error("Not valid Email");
        }
    }
    },
    hobbies: {
        type: String,
        required:true
  }
});

const Data = new mongoose.model("Data", DataSchema);

module.exports = Data;