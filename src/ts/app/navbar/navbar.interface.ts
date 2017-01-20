// NPM Dependency Imports
import { EventEmitter } from '@angular/core';

export interface INavbar {
  title: string;
  visibleTasks: string;
  visibleTasksChanged: EventEmitter<Object>;
  filterVisibleTasks(filterStatus: string): void;
}
