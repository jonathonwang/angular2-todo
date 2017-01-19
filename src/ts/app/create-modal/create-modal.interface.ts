// NPM Dependency Imports
import { EventEmitter } from '@angular/core';
// Interface Imports
import { ITask } from '../app.interface';

export interface ICreateModal {
  isModalOpen: boolean;
  newTask: ITask;
  formSubmitted: EventEmitter<ITask>;
  modalClosed: EventEmitter<Object>;
  submitTaskForm(e: Event): void;
  closeModal(e: Event): void;
}

export default ICreateModal;
