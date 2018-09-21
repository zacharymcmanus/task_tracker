import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CRUD Tasks - Angular Style!';
  tasks = [];
  task = [];
  id = '';
  newTask: any;
  editTask = [];
  showEditForm = false;
  self = this;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = {title: "", description: ""}
  }

  // Load All Tasks
  tasksOnClick(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.tasks = data['tasks'];
      console.log("Got our tasks!", this.tasks);
    })
  }

  taskonClick(event: any){
    this.task = [];
    this.id = event.target.value;
    let observable = this._httpService.getTask(this.id);
    observable.subscribe(data => {
      console.log("Clicked task button", this.id);
      this.task = data['task'];
      console.log("Got our task!", this.task);
    })
  }
  
  // Create Task
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""};
      this.tasksOnClick();
    })
  }

  // Edit Click Function
  editOnClick(task) {
    console.log("Task we need to edit", task);
    task.showEditForm = true;
  }

  // Edit Task
  onEdit(editTask){
    editTask.showEditForm = false;
    console.log("Edit the task", editTask._id);
    let observable = this._httpService.editTask(editTask);
    observable.subscribe(data => {
      console.log("Got data from post", data);
    })
  }
  // Delete Task
  onDelete(task_id){
    let observable = this._httpService.deleteTask(task_id);
    observable.subscribe(data => {
      console.log("Deleting task", data);
      this.tasksOnClick();
    })
  }
}
