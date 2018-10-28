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




  onAddTask(form:NgForm) {
    const {value: task} = form;

    this.taskService.createTask(task).subscribe(
      (response) =>  this.tasks.push(response),
      (error) => console.log(error)
      );


    // this.tasks.push({
    //   'title': title,
    //   'description': description,
    // });

    // this.taskService.storeTasks(this.tasks).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    //   );

   }

}
