// NPM Dependency Imports
import { EventEmitter } from '@angular/core';

export interface IAlert {
  status: string;
  message: string;
  visible: boolean;
  alertClosed: EventEmitter<Object>;
  closeAlert(e: Event): void;
}

export default IAlert;
