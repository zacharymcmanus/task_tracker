var mongoose  = require("mongoose");
var fs        = require("fs");
var path      = require("path");
var modelPath = path.join(__dirname,"./../models");
mongoose.connect("mongodb://localhost/crudTasksAngular");
mongoose.Promise = global.Promise;

fs.readdirSync(modelPath).forEach(function(file) {
    if(file.indexOf(".js") >= 0) {
        require(modelPath+"/"+file);
    }
});








