import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../models/task.model';
import { Store } from '../../todo-list.store';

@Component({
  selector: 'app-tasks-started',
  templateUrl: './tasks-started.component.html',
  styleUrls: ['./tasks-started.component.scss'],
})
export class TasksStartedComponent implements OnInit {
  started$: Observable<Task[]> | null;

  constructor(private todoService: TodoService, private store: Store) {
    this.started$ = this.store
      .getTodoList()
      .pipe(
        map((todolist) =>
          todolist.filter((task) => task.started && !task.finished)
        )
      );
  }

  ngOnInit(): void {}
}
