import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: "String",
  author: "String",
  image: "String",
  created: {
    type: Date,
    default: Date.now
  },
  opinion: "String"
})

export default mongoose.model("Post", schema)
