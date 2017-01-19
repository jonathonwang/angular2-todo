// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Imports
import { template } from './edit-modal.template';
// Interface Imports
import { IEditModal } from './edit-modal.interface';
import { ITask } from '../app.interface';

@Component({
  selector: 'edit-modal',
  template
})

export class EditModal implements IEditModal {
  @Input() isEditModalOpen: boolean;
  @Input() editTask: ITask;
  @Output() editModalFormWasSubmitted = new EventEmitter();
  @Output() editModalFormWasClosed = new EventEmitter();
  submitEditModalForm(editTask): void {
    this.editModalFormWasSubmitted.emit(editTask);
  }
  closeEditModalForm(): void {
    this.editModalFormWasClosed.emit();
  }
}
