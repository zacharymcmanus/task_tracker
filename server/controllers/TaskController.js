var Task = require("mongoose").model("Task");

module.exports = {
    // Retrieve All Tasks
    all:function(req,res) {
        Task.find({}, function(err,tasks){
            if (err) {
                console.log("Returned error", err);
                res.json({status: "Error"});
            }
            res.json({status: "success", tasks: tasks});
        })
    },
    // Retrieve Task By ID
    show:function(req,res) {
        var id = req.params.id;
        Task.findOne({_id: id},function(err,task){
            if(err){
                console.log("Returned error", err)
                res.json({status: "Error"})
            } else {
                res.json({status: "success", task: task});
            }
        })
    },
    // Create A Task
    create:function(req,res) {
        var task = new Task({name:req.body.name, description:req.body.description, completed:req.body.completed});
        task.save(function(err, task){
            if(err){
                res.json({status: "Error"})
            } else {
                res.json({status: "success", task: task});
            }
        })
    },
    // Update A Task
    update:function(req,res) {
        var id = req.params.id;
        Task.update({_id: id}, req.body, function(err, task) {
            if(err){
                res.json({status: "Error"})
            } else {
                res.json({status: "success", task: task});
            }
        });
    },
    // Delete A Task
    delete:function(req,res) {
        var id = req.params.id;
        Task.remove({_id: id}, function(err, task){
            if(err){
                res.json({status: "Error"})
            } else {
                res.json({status: "success", task: task});
            }
        })
    }
}

