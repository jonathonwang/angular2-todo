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
  @Output() modalWasOpened = new EventEmitter();
  openModal(status: string): void {
    this.modalWasOpened.emit(status);
  }
}
