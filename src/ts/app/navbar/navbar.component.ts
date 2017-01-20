// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Import
import { template } from './navbar.template';
// Interface Imports
import { INavbar } from './navbar.interface';

@Component({
  selector: 'navbar',
  template
})

export class Navbar implements INavbar {
  @Input() title: string;
  @Input() visibleTasks: string;
  @Output() visibleTasksChanged = new EventEmitter();
  filterVisibleTasks(filterState: string): void {
    this.visibleTasksChanged.emit(filterState);
  }
}
