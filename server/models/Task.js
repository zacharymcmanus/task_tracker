var mongoose = require("mongoose");

var Task = mongoose.model("Task", new mongoose.Schema({
    name: {type: String, required: true, minlength: 1, maxlength: 255},
    description: {type: String, required: true, minlength: 1, maxlength: 255},
    completed: {type: Boolean, default: false}
}, {timestamps: true})); 