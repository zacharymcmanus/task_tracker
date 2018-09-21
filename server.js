var express = require("express");
var bParse = require("body-parser");
var mongoose = require("mongoose");
var app = express();

app.use(bParse.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.Promise = global.Promise;

app.listen(8000, function() {
    console.log("************APP RUNNING ON PORT 8000************");
})

