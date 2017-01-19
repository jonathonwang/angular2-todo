// NPM Dependency Imports
import { Component } from '@angular/core';
// AppComponent Template Import
import { template } from './app.template';
// Class Imports
import { Task } from './app.classes';
// Interface Imports
import { IAppComponent, ITask } from './app.interface';

@Component({
  selector: 'app',
  template
})

export class AppComponent implements IAppComponent {
  // State
  title: string = 'Todo App';
  // Task Array State
  tasks: Array<Task> = [];
  // New Task State
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
  // Edit Task State
  editTask = {
    id: -1,
    title: '',
    status: 'planned',
    description: '',
    estimate: 0,
    timeSpent: 0,
    createdAt: Date,
    updatedAt: Date
  };
  // Alert State
  alert = {
    status: '',
    message: '',
    visible: false
  };
  deleteTaskId: number = -1;
  activeDropdown: number = -1;
  isModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  // Methods
  // Filter Tasks By Status
  taskFilter(taskStatus: string): Array<Task> {
    return this.tasks.filter((task) => task.status === taskStatus);
  }
  // Calculate Estimate for all tasks in a given Status
  totalEstimate(taskStatus: string): number {
    let total: number = 0;
    this.tasks.filter((task) => task.status === taskStatus).map((task) => {
      total += task.estimate;
    });
    return total;
  }
  // Toggle Task Create Modal Open / Closed
  toggleTaskModal(status?: string): void {
    if (status !== undefined) {
      this.newTask.status = status;
    }
    this.isModalOpen = !this.isModalOpen;
  }
  // Create A New Task and push into Tasks Array
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
  // Reset newTask State to original
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
  // Show Alert
  showAlert(status: string, message: string): void {
    this.alert.visible = true;
    this.alert.status = status;
    this.alert.message = message;
  }
  // Close Alert
  closeAlert(): void {
    this.alert.visible = false;
  }
  // Toggle Task Dropdown
  toggleDropdown(taskId?: number): void {
    if (this.activeDropdown !== taskId) {
      this.activeDropdown = taskId;
    } else {
      this.activeDropdown = -1;
    }
  }
  // Change the Status of a Task
  changeTaskStatus(taskData) {
    const taskIndex: number = this.tasks.findIndex((task) => task.id === taskData.id);
    this.tasks[taskIndex].status = taskData.newStatus;
  }
  // Toggle Delete Modal Open / Close
  toggleDeleteModal(taskId?: number) {
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
    if (taskId) {
      this.deleteTaskId = taskId;
    }
  }
  // Remove Task from Task Array in State
  removeTask(taskId) {
    const taskIndex: number = this.tasks.findIndex((task) => task.id === taskId);
    this.toggleDeleteModal();
    this.tasks.splice(taskIndex, 1);
    this.resetDeleteTaskId();
  }
  // Reset Delete Task Id to original State
  resetDeleteTaskId() {
    this.deleteTaskId = -1;
  }
  // Toggle Edit Modal Open / Close
  toggleEditModal(taskId?: number) {
    this.isEditModalOpen = !this.isEditModalOpen;
    if (taskId) {
      this.toggleDropdown();
      const taskIndex: number = this.tasks.findIndex((task) => task.id === taskId);
      const editTask = this.tasks[taskIndex];
      const clonedEditTask = Object.assign({}, editTask);
      this.populateEditTaskForm(clonedEditTask);
    }
  }
  // Populate Edit Task Form with Task Data
  populateEditTaskForm(editTask) {
    this.editTask = editTask;
  }
  // Replace Task in Task Array with Edited Task;
  submitEditTaskForm(editTask) {
    const editedTaskIndex: number = this.tasks.findIndex((task) => task.id === editTask.id);
    if (editedTaskIndex > -1) {
      this.tasks[editedTaskIndex] = new Task(editTask);
      this.toggleEditModal();
      this.resetEditTask();
    } else {
      this.showAlert('danger', 'Something Went Wrong, Please Try Again');
    }
  }
  // Reset Edit Task to original State
  resetEditTask() {
    this.editTask = {
      id: -1,
      title: '',
      status: 'planned',
      description: '',
      estimate: 0,
      timeSpent: 0,
      createdAt: Date,
      updatedAt: Date
    };
  }
}
