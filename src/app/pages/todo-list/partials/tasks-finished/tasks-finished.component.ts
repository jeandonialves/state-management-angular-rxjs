import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TodoService } from '../../services/todo.service';
import { Store } from '../../todo-list.store';

@Component({
  selector: 'app-tasks-finished',
  templateUrl: './tasks-finished.component.html',
  styleUrls: ['./tasks-finished.component.scss']
})
export class TasksFinishedComponent implements OnInit {

  finished$: Observable<Task[]> | null;

  constructor(private todoService: TodoService, private store: Store) {
    this.finished$ = this.store
      .getTodoList()
      .pipe(
        map((todolist) =>
          todolist.filter((task) => task.finished)
        )
      );
  }

  ngOnInit(): void {}

}
