// NPM Dependency Imports
import { Component, Input } from '@angular/core';

// Template Imports
import { template } from './task-list.template';

// Class Imports
import { Task } from '../app.classes';

@Component({
  selector: 'task-list',
  template
})

export class TaskList {
  @Input() status: string;
  @Input() tasks: Array<Task>;
}
