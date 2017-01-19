// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Imports
import { template } from './delete-modal.template';
// Interface Imports
import { IDeleteModal } from './delete-modal.interface';

@Component({
  selector: 'delete-modal',
  template
})

export class DeleteModal implements IDeleteModal {
  @Input() isDeleteModalOpen: boolean;
  @Input() deleteTaskId: number;
  @Output() deleteFormWasSubmitted = new EventEmitter();
  @Output() deleteModalWasClosed = new EventEmitter();
  submitDeleteTaskForm(taskId: number): void {
    this.deleteFormWasSubmitted.emit(taskId);
  }
  closeDeleteTaskModal(): void {
    this.deleteModalWasClosed.emit();
  }
}
