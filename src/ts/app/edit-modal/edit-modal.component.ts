// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Imports
import { template } from './edit-modal.template';
// Interface Imports
import { ITask } from '../app.interface';

@Component({
  selector: 'edit-modal',
  template
})

export class EditModal {
  @Input() isEditModalOpen: boolean;
  @Input() editTask: ITask;
  @Output() editModalFormWasSubmitted = new EventEmitter();
  @Output() editModalFormWasClosed = new EventEmitter();
  submitEditModalForm(editTask) {
    this.editModalFormWasSubmitted.emit(editTask);
  }
  closeEditModalForm() {
    this.editModalFormWasClosed.emit();
  }
}
