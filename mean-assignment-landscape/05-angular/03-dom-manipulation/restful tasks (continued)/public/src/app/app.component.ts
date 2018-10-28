import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from './tasks.service';
import { NgForm } from '@angular/forms';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'The Task Master';
  tasks: Task[] = [];
  constructor (
    private taskService: TaskService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}


  displayTasks() {
    this.taskService.getAllTasks().subscribe(
      (response) => {
        // const res = JSON.stringify(response)
      console.log('respoinse was: ' + response);
      response.forEach(element => {
      this.tasks.push(element);
      });
      console.log('tasks arr: ' + this.tasks);
    },
      (error) => console.log(error)
    );
    document.querySelector('ul').style.display = 'flex';
  }

  onAddTask(form: NgForm) {
    const {value: task} = form;

    this.taskService.createTask(task).subscribe(
      (response) =>  this.tasks.push(response),
      (error) => console.log(error)
      );
    document.querySelector('ul').style.display = 'flex';
   }

}
