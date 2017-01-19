// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Imports
import { template } from './delete-modal.template';
// Interface Imports
import { ITask } from '../app.interface';

@Component({
  selector: 'delete-modal',
  template
})

export class DeleteModal {
  @Input() isDeleteModalOpen: boolean;
  @Input() deleteTaskId: number;
  @Output() deleteFormWasSubmitted = new EventEmitter();
  @Output() deleteModalWasClosed = new EventEmitter();
  submitDeleteTaskForm(taskId: number) {
    this.deleteFormWasSubmitted.emit(taskId);
  }
  closeDeleteTaskModal() {
    this.deleteModalWasClosed.emit();
  }
}
