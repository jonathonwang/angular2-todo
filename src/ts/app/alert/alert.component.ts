// NPM Dependency Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Template Imports
import { template } from './alert.template';
// Interface Imports
import { IAlert } from './alert.interface';

@Component({
  selector: 'alert',
  template
})

export class Alert implements IAlert {
  @Input() status: string;
  @Input() message: string;
  @Input() visible: boolean;
  @Output() alertClosed = new EventEmitter();
  closeAlert(e: Event) {
    e.preventDefault();
    this.alertClosed.emit();
  }
}
