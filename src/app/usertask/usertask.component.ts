import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { TaskService } from './task.servcie';

@Component({
  selector: 'app-usertask',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './usertask.component.html',
  styleUrl: './usertask.component.scss',
})
export class UsertaskComponent {
  @Input({ required: true }) name!: string;
  @Input() userid!: string;
  isTaskAdded: boolean = false;

  private taskService = inject(TaskService);
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userid);
  }
  taskComplete(id: string) {
    this.taskService.taskComplete(id);
  }
  onTaskAdd() {
    this.isTaskAdded = true;
  }
  onCloseClick() {
    this.isTaskAdded = false;
  }
}
