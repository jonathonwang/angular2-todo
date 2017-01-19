// NPM Dependency Imports
import { EventEmitter } from '@angular/core';
// Class Imports
import { Task } from '../app.classes';

export interface ITaskList {
  status: string;
  tasks: Array<Task>;
  totalEstimate: number;
  activeDropdown: number;
  modalWasOpened: EventEmitter<Object>;
  deleteModalWasOpened: EventEmitter<Object>;
  dropdownWasToggled: EventEmitter<Object>;
  taskWasMoved: EventEmitter<Object>;
  editModalWasOpened: EventEmitter<Object>;
  openModal(status: string): void;
  openDropdown(taskId: number): void;
  moveTask(taskId: number, newStatus: string): void;
  openDeleteModal(taskId: number): void;
  openEditModal(taskId: number): void;
}

export default ITaskList;
