import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TaskService } from '../task.servcie';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Input({ required: true }) userId!: string;
  newTitle: string = '';
  newSummary: string = '';
  newDate: string = '';
  private taskService = inject(TaskService);

  onCancelClick() {
    this.close.emit();
  }
  createTask() {
    this.taskService.addNewTask(
      {
        title: this.newTitle,
        summary: this.newSummary,
        date: this.newDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
