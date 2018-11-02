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

  updateTask(task): Observable <Task> {
    return this.http.put<Task>(`/api/tasks/${task._id}`, task);
  }

  deleteTask(task): Observable <Task> {
    return this.http.delete<Task>(`/api/tasks/${task._id}`);
  }

}
