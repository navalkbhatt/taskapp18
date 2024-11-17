import { Injectable } from '@angular/core';
import { NewTask } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
  /**
   *
   */
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) this.tasks = JSON.parse(tasks);
  }
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Complete Project Report',
      summary:
        'Finalize the project report for the client, including all necessary data and conclusions.',
      dueDate: '2024-11-30T17:00:00Z',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Fix Bugs in Dashboard',
      summary:
        'Resolve the bugs related to user login and data display on the dashboard.',
      dueDate: '2024-11-25T12:00:00Z',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare Presentation for Meeting',
      summary:
        'Create slides for the upcoming team meeting, covering project progress and next steps.',
      dueDate: '2024-11-22T09:00:00Z',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Update Website Content',
      summary:
        "Revise the 'About Us' section of the website with updated company information and team details.",
      dueDate: '2024-12-01T18:00:00Z',
    },
    {
      id: 't5',
      userId: 'u1',
      title: 'Conduct User Testing',
      summary:
        'Organize and execute user testing for the new app feature, collect feedback and suggestions.',
      dueDate: '2024-11-18T14:00:00Z',
    },
  ];
  getUserTasks(userId: string) {
    console.log(`userId ${userId}`);
    return this.tasks.filter((task) => task.userId === userId);
  }
  addNewTask(newTask: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      summary: newTask.summary,
      title: newTask.title,
      dueDate: newTask.date,
    });
    this.saveTasks();
  }
  taskComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
