const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();


mongoose.connect("mongodb://localhost:27017/tododb",{useUnifiedTopology: true});
const todoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: String,
    dueDate: String,

});
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;