// NPM Dependency Imports
import { EventEmitter } from '@angular/core';

export interface INavbar {
  title: string;
  modalOpened: EventEmitter<Object>;
  modalWasOpened(): void;
}
