import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TasksComponent } from './partials/tasks/tasks.component';
import { TasksStartedComponent } from './partials/tasks-started/tasks-started.component';
import { TasksFinishedComponent } from './partials/tasks-finished/tasks-finished.component';
import { TodoComponent } from './partials/todo/todo.component';
import { Store } from './todo-list.store';

@NgModule({
  declarations: [
    TodoListComponent,
    TasksComponent,
    TasksStartedComponent,
    TasksFinishedComponent,
    TodoComponent,
  ],
  imports: [CommonModule, HttpClientModule, TodoListRoutingModule],
})
export class TodoListModule {}
