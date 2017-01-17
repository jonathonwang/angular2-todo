// NPM Dependency Imports
import { Component, Directive } from '@angular/core';

// AppComponent Template Import
import { template } from './app.template';

// Class Imports
import { Task } from './app.classes';

// Interface Imports
import { IAppComponent } from './app.interface';

// Child Components
import { TaskList } from './task-list/task-list.component';

@Component({
  selector: 'app',
  template
})

export class AppComponent implements IAppComponent {
  title: string = 'Todo App';
  tasks: Array<Task> = [myTask];
  plannedTasks() {
    return this.taskFilter('planned');
  }
  inProgressTasks() {
    return this.taskFilter('in-progress');
  }
  completedTasks() {
    return this.taskFilter('completed');
  }
  taskFilter(taskStatus: string) {
    return this.tasks.filter((task) => task.status === taskStatus);
  }
}
const myTask = new Task('test title', 'planned', 'description', 1, 0, new Date(), new Date());
