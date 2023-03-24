const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BlogSchema = new Schema({
  title:{
    type: String,
    required: true
  }, 
  descriptions:{
    type: String,
    required: true
  }, 
  category:{
    type: String,
    required: true
  }, 
  slug:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blogs = mongoose.model("blogs", BlogSchema);