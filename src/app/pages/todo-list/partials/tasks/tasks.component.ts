import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Task } from '../../models/task.model';
import { TodoService } from '../../services/todo.service';
import { Store } from '../../todo-list.store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  todolist$: Observable<Task[]> | null;
  subscription: Subscription;

  constructor(private todoService: TodoService, private store: Store) {
    this.todolist$ = this.store
      .getTodoList()
      .pipe(
        map((todolist) =>
          todolist.filter((task) => !task.started && !task.finished)
        )
      );

    this.subscription = this.todoService.getTodoList$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}
}
