import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  title: String,
  description: String,
  imgBase64: String
});

const Data = mongoose.model("Data", dataSchema);
export default Data;