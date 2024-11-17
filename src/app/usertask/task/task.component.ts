import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.servcie';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task!: Task;
  private taskService = inject(TaskService);
  onTaskComplete() {
    this.taskService.taskComplete(this.task.id);
  }
}
