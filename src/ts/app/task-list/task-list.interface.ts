// NPM Dependency Imports
import { EventEmitter } from '@angular/core';
// Class Imports
import { Task } from '../app.classes';

export interface ITaskList {
  status: string;
  tasks: Array<Task>;
  totalEstimate: number;
  modalWasOpened: EventEmitter<Object>;
  openModal(status: string): void;
}

export default ITaskList;
