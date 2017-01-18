// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Import
import { template } from './create-modal.template';
// Interface Imports
import { ITask } from '../app.interface';
import { ICreateModal } from './create-modal.interface';

@Component({
  selector: 'create-modal',
  template
})


export class CreateModal implements ICreateModal {
  @Input() isModalOpen: boolean;
  @Input() newTask: ITask;
  @Input() createTask: Function;
  @Output() formSubmitted = new EventEmitter();
  @Output() modalClosed = new EventEmitter();
  submitTaskForm(e: Event) {
    e.preventDefault();
    const taskData: ITask = Object.assign({}, this.newTask);
    taskData.createdAt = new Date();
    taskData.updatedAt = new Date();
    this.formSubmitted.emit(taskData);
  }
  closeModal(e: Event) {
    e.preventDefault();
    this.modalClosed.emit();
  }
}

export default CreateModal;
