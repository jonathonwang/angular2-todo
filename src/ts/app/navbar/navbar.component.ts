// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Import
import { template } from './navbar.template';

@Component({
  selector: 'navbar',
  template
})

export class Navbar {
  @Input() title: string;
  @Output() modalOpened = new EventEmitter();
  modalWasOpened() {
    this.modalOpened.emit();
  }
}
