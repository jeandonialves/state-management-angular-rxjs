import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';
import { Store } from '../todo-list.store';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(tap((next) => this.store.set('todolist', next)));

  constructor(private http: HttpClient, private store: Store) {}

  // getTodoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:3000/todolist');
  // }
}
