const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testapisSchema = new Schema({
  name: { type: String },
  code: { type: Number },
  division_type: { type: String },
  codename: { type: String },
  phone_code: { type: Number },
  district: { type: Array },
  //   districts: [
  //     {
  //       name: String,
  //       code: Number,
  //       division_type: String,
  //       codename: String,
  //       province_code: Number,
  //       wards: Array,
  //     },
  //   ],
});

module.exports = mongoose.model("testapis", testapisSchema);
