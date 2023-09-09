import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000';
  public tasks: any[]= [];
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks`);
  }

  addTask(newTask: { nome: string; id: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/tasks`,newTask);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tasks/${id}`);
  }

  atualizarTarefa(task: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/tasks/${task.id}`,task);
  }
}

