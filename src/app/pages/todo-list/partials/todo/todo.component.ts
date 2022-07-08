import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() list: Task[] | null = [];
  @Output() toggle = new EventEmitter<any>();

  toggleItem(index: number, action: string) {
    if (this.list) {
      const task = this.list[index];

      switch (action) {
        case 'started':
          task.finished = false;
          task.started = true;
          break;
        case 'finished':
          task.finished = true;
          task.started = false;
          break;
        case 'resume':
          task.finished = false;
          task.started = true;
          break;
        case 'cancel':
          task.finished = false;
          task.started = false;
          break;
      }
      this.toggle.emit({
        task: { ...task },
      });
    }
  }
}
