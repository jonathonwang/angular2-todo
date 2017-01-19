// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Template Imports
import { template } from './task-list.template';

// Class Imports
import { Task } from '../app.classes';

// Interface Imports
import { ITaskList } from './task-list.interface';

@Component({
  selector: 'task-list',
  template
})

export class TaskList implements ITaskList {
  @Input() status: string;
  @Input() tasks: Array<Task>;
  @Input() totalEstimate: number;
  @Input() activeDropdown: number;
  @Output() modalWasOpened = new EventEmitter();
  @Output() deleteModalWasOpened = new EventEmitter();
  @Output() dropdownWasToggled = new EventEmitter();
  @Output() taskWasMoved = new EventEmitter();
  openModal(status: string): void {
    this.modalWasOpened.emit(status);
  }
  openDropdown(taskId: number): void {
    this.dropdownWasToggled.emit(taskId);
  }
  moveTask(taskId: number, newStatus: string): void {
    this.taskWasMoved.emit({ id: taskId, newStatus });
    this.dropdownWasToggled.emit(taskId);
  }
  openDeleteModal(taskId): void {
    this.deleteModalWasOpened.emit(taskId);
    this.dropdownWasToggled.emit();
  }
}
