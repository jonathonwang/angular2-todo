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

const task1 = new Task ({
  id: 1,
  title: 'Planned Task',
  status: 'planned',
  description: 'This is where a very long description for a planned task could go to explain the task in further detail',
  estimate: 0,
  timeSpent: 0,
  createdAt: new Date(),
  updatedAt: new Date()
});
const task2 = new Task ({
  id: 2,
  title: 'Planned Task',
  status: 'in-progress',
  description: 'This is where a very long description for a planned task could go to explain the task in further detail',
  estimate: 0,
  timeSpent: 0,
  createdAt: new Date(),
  updatedAt: new Date()
});
const task3 = new Task ({
  id: 3,
  title: 'Planned Task',
  status: 'completed',
  description: 'This is where a very long description for a planned task could go to explain the task in further detail',
  estimate: 0,
  timeSpent: 0,
  createdAt: new Date(),
  updatedAt: new Date()
});

@Component({
  selector: 'app',
  template
})

export class AppComponent implements IAppComponent {
  // State
  title: string = 'Todo App';
  tasks: Array<Task> = [task1, task2, task3];
  // !!!!!! I need an interface here
  newTask = {
    id: 4,
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
  activeDropdown: number = -1;
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
      id: this.newTask.id + 1,
      title: '',
      status: 'planned',
      description: '',
      estimate: 0,
      timeSpent: 0,
      createdAt: Date,
      updatedAt: Date
    };
  }
  showAlert(status: string, message: string): void {
    this.alert.visible = true;
    this.alert.status = status;
    this.alert.message = message;
  }
  closeAlert(): void {
    this.alert.visible = false;
  }
  toggleDropdown(taskId: number): void {
    if (this.activeDropdown !== taskId) {
      this.activeDropdown = taskId;
    } else {
      this.activeDropdown = -1;
    }
  }
  changeTaskStatus(taskData) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskData.id);
    this.tasks[taskIndex].status = taskData.newStatus;
  }
}
