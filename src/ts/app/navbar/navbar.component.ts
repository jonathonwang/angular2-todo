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
  @Output() modalOpened = new EventEmitter();
  modalWasOpened() {
    this.modalOpened.emit();
  }
}
