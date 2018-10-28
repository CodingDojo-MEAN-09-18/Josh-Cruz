import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
import { Task } from './models/task';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient ) {}

  createTask(task: Task): Observable <Task> {
    console.log(task);
    return this.http.post<Task>('/api/tasks', task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }


}
