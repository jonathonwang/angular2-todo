// NPM Dependency Imports
import { EventEmitter } from '@angular/core';
// Interface Imports
import { ITask } from '../app.interface';

export interface IEditModal {
  isEditModalOpen: boolean;
  editTask: ITask;
  editModalFormWasSubmitted: EventEmitter<Object>;
  editModalFormWasClosed: EventEmitter<Object>;
  submitEditModalForm(editTask): void;
  closeEditModalForm(): void;
}
