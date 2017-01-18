// NPM Dependency Imports
import { Component } from '@angular/core';
// AppComponent Template Import
import { template } from './app.template';
// Class Imports
import { Task } from './app.classes';
// Interface Imports
import { IAppComponent, ITask } from './app.interface';
// Child Components
import { TaskList } from './task-list/task-list.component';

@Component({
  selector: 'app',
  template
})

export class AppComponent implements IAppComponent {
  // State
  title: string = 'Todo App';
  tasks: Array<Task> = [];
  // !!!!!! I need an interface here
  newTask = {
    title: '',
    status: 'planned',
    description: '',
    estimate: 0,
    timeSpent: 0,
    createdAt: Date,
    updatedAt: Date
  };
  alert = {
    status: '',
    message: '',
    visible: false
  };
  // Methods
  isModalOpen: boolean = false;
  taskFilter(taskStatus: string): Array<Task> {
    return this.tasks.filter((task) => task.status === taskStatus);
  }
  totalEstimate(taskStatus: string): number {
    let total = 0;
    this.tasks.filter((task) => task.status === taskStatus).map((task) => {
      total += task.estimate;
    });
    return total;
  }
  toggleTaskModal(status?: string): void {
    if (status !== undefined) {
      this.newTask.status = status;
    }
    this.isModalOpen = !this.isModalOpen;
  }
  createTask(taskData: ITask): void {
    if (taskData.title.length > 0) {
      const newTask = new Task(taskData);
      this.tasks.push(newTask);
      this.resetNewTaskFields();
      this.toggleTaskModal('');
      this.showAlert('success', 'Task Successfully Created');
    } else {
      this.showAlert('danger', 'Task Title is Required');
    }
  }
  resetNewTaskFields(): void {
    this.newTask = {
      title: '',
      status: 'planned',
      description: '',
      estimate: 0,
      timeSpent: 0,
      createdAt: Date,
      updatedAt: Date
    };
  }
  showAlert(status: string, message: string) {
    this.alert.visible = true;
    this.alert.status = status;
    this.alert.message = message;
  }
  closeAlert() {
    this.alert.visible = false;
  }
}
