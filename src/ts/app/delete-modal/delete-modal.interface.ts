// NPM Dependency Imports
import { EventEmitter } from '@angular/core';

export interface IDeleteModal {
  isDeleteModalOpen: boolean;
  deleteTaskId: number;
  deleteFormWasSubmitted: EventEmitter<Object>;
  deleteModalWasClosed: EventEmitter<Object>;
  submitDeleteTaskForm(taskId: number): void;
  closeDeleteTaskModal(): void;
}
