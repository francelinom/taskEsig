import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError, flatMap } from 'rxjs/operators';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiPath = 'api/task';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToTasks)
    );
  }

  getById(id: number): Observable<Task> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToTask)
    );
  }

  create(task: Task): Observable<Task> {
    return this.http.post(this.apiPath, task).pipe(
      catchError(this.handleError),
      map(this.jsonDataToTask)
    );
  }

  update(task: Task): Observable<Task> {
    const url = `${this.apiPath}/${task.id}`;
    return this.http.put(url, task).pipe(
      catchError(this.handleError),
      map(() => task)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private jsonDataToTasks(jsonDate: any[]): Task[] {
    const task: Task[] = [];
    jsonDate.forEach(element => task.push(element as Task));
    return task;
  }

  private jsonDataToTask(jsonDate: any): Task {
    return jsonDate as Task;
  }

  private handleError(error: any): Observable<any>{
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
