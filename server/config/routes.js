var mongoose = require("mongoose");
var TaskController = require("../controllers/TaskController.js");

module.exports = function(app){
    // Serves up all tasks
    app.get("/tasks",function(req,res){
        TaskController.all(req,res);
    });

    // Brings up the document of that particular task
    app.get("/tasks/:id",function(req,res){
        TaskController.show(req,res);
    });

    // Adds a task into the database
    app.post("/tasks",function(req,res){
        console.log("Creating new task!");
        TaskController.create(req,res);
    });
    
    // Update a task
    app.put("/tasks/:id",function(req,res){
        TaskController.update(req,res);
    })

    // Deletes a task from the database
    app.delete("/tasks/:id",function(req,res){
        TaskController.delete(req,res);
    });
}
