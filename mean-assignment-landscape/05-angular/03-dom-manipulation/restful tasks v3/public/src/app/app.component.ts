import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from './tasks.service';
import { NgForm } from '@angular/forms';
import { Task } from './models/task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  pageTitle = 'The  Crappy Task Master';
  tasks: Task[] = [];
  selectedTask: Task;
  updateClicked = false;
  alert = '';
  constructor(
    private taskService: TaskService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.displayTasks();
  }

  displayTasks() {
    this.taskService.getAllTasks().subscribe(
      response => {
        // const res = JSON.stringify(response)
        console.log('respoinse was: ' + response);
        response.forEach(element => {
          this.tasks.push(element);
        });
        console.log('tasks arr: ' + this.tasks);
      },
      error => console.log(error)
    );
    document.querySelector('ul').style.display = 'flex';
  }

  onAddTask(form: NgForm) {
    const { value: task } = form;

    this.taskService
      .createTask(task)
      .subscribe(
        response => this.tasks.push(response),
        error => console.log(error)
      );
    document.querySelector('ul').style.display = 'flex';
  }

  showDescription(task: Task): void {
    this.selectedTask = task;
    console.log(this.selectedTask);
  }

  showTaskUpdateForm() {
    this.updateClicked = true;
    console.log(this.updateClicked);
  }

  onUpdateTask(updateForm: NgForm) {
    const { value: task } = updateForm;
    this.taskService.updateTask({ ...this.selectedTask, ...task }).subscribe(
      response => {
        this.tasks = [...this.tasks.filter(currentTask =>   currentTask._id !== this.selectedTask._id), response,];
        this.selectedTask = response;
      },
      error => console.log(error)
    );
    this.alert = 'Task Was Updated!';
    this.updateClicked = false;
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.selectedTask).subscribe(
      response => {
        this.tasks = this.tasks.filter(currentTask =>   currentTask._id !== this.selectedTask._id);
        this.selectedTask = null;
        this.alert = 'Task Was Deleted!';
      },
      error => console.log(error)
    );
    this.alert = '';
    this.updateClicked = false;
  }
}
