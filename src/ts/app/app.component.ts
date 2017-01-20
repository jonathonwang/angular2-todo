// NPM Dependency Imports
import { Component } from '@angular/core';
// AppComponent Template Import
import { template } from './app.template';
// Class Imports
import { Task } from './app.classes';
// Interface Imports
import { IAppComponent, ITask } from './app.interface';
// Api Import
import { api } from './app.api';

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
  newTask: ITask = {
    title: '',
    status: 'planned',
    description: '',
    estimate: 0,
    timeSpent: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  // Edit Task State
  editTask: ITask = {
    id: -1,
    title: '',
    status: 'planned',
    description: '',
    estimate: 0,
    timeSpent: 0,
    createdAt: new Date(),
    updatedAt: new Date()
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
  ngAfterViewInit() {
    this.injectRetrievedTasks();
  }
  injectRetrievedTasks() {
    api.fetchTasks(
      (tasks) => {
        for (let task of tasks) {
          const newTask = new Task(task);
          this.tasks.push(newTask);
        }
      },
      (data) => {
        this.showAlert('danger', 'Unable to Retrieve Tasks. Please Try Refereshing This Page');
      }
    );
  }
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
      api.createTask(taskData,
        (data) => {
          const newTask = new Task(data);
          this.tasks.push(newTask);
          this.resetNewTaskFields();
          this.toggleTaskModal('');
          this.showAlert('success', 'Task Successfully Created');
        },
        (response) => {
          this.showAlert('danger', 'Something Went Wrong. Please Try Again');
        }
      );
    } else {
      this.showAlert('danger', 'Task Title is Required');
    }
  }
  // Reset newTask State to original
  resetNewTaskFields(): void {
    this.newTask = {
      title: '',
      status: 'planned',
      description: '',
      estimate: 0,
      timeSpent: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    } as ITask;
  }
  // Show Alert
  showAlert(status: string, message: string): void {
    this.alert.visible = true;
    this.alert.status = status;
    this.alert.message = message;
    setTimeout(() => {
      if (this.alert.visible === true) this.alert.visible = false;
    }, 3000);
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
  changeTaskStatus(taskData): void {
    const taskIndex: number = this.tasks.findIndex((task) => task.id === taskData.id);
    const movedTask: ITask = Object.assign({}, this.tasks[taskIndex]);
    movedTask.status = taskData.status;
    movedTask.updatedAt = new Date();
    api.editTask(movedTask,
      (data) => {
        this.tasks[taskIndex] = new Task(data);
        this.showAlert('success', `Task Successfully Moved to ${data.status}.`);
      },
      (response) => {
        this.showAlert('danger', 'Something Went Wrong. Please Try Again.');
      }
    );
  }
  // Toggle Delete Modal Open / Close
  toggleDeleteModal(taskId?: number): void {
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
    if (taskId) {
      this.deleteTaskId = taskId;
    }
  }
  // Remove Task from Task Array in State
  removeTask(taskId: number): void {
    api.deleteTask(taskId,
      (data) => {
        const taskIndex: number = this.tasks.findIndex((task) => task.id === taskId);
        this.tasks.splice(taskIndex, 1);
        this.toggleDeleteModal();
        this.resetDeleteTaskId();
        this.showAlert('success', 'Task Successfully Deleted');
      },
      (response) => {
        this.showAlert('danger', 'Something Went Wrong, Please Try Again');
      }
    );
  }
  // Reset Delete Task Id to original State
  resetDeleteTaskId() {
    this.deleteTaskId = -1;
  }
  // Toggle Edit Modal Open / Close
  toggleEditModal(taskId?: number): void {
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
  populateEditTaskForm(editTask: ITask): void {
    this.editTask = editTask;
  }
  // Replace Task in Task Array with Edited Task;
  submitEditTaskForm(editTask: ITask): void {
    const editedTaskIndex: number = this.tasks.findIndex((task) => task.id === editTask.id);
    editTask.updatedAt = new Date();
    if (editedTaskIndex > -1) {
      api.editTask(editTask,
        (data) => {
          this.tasks[editedTaskIndex] = new Task(editTask);
          this.toggleEditModal();
          this.resetEditTask();
          this.showAlert('success', 'Task Successfully Saved');
        },
        (response) => {
          this.showAlert('danger', 'Something Went Wrong, Please Try Again');
        }
      );
    } else {
      this.showAlert('danger', 'Something Went Wrong, Please Try Again');
    }
  }
  // Reset Edit Task to original State
  resetEditTask(): void {
    this.editTask = {
      id: -1,
      title: '',
      status: 'planned',
      description: '',
      estimate: 0,
      timeSpent: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    } as ITask;
  }
}
