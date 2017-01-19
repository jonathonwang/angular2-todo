import { ITask } from './app.interface';

export class Task implements ITask {
  id: number;
  title: string;
  status: string;
  description: string;
  estimate: number;
  timeSpent: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(taskConstructor: ITask) {
    this.id = taskConstructor.id;
    this.title = taskConstructor.title;
    this.status = taskConstructor.status;
    this.description = taskConstructor.description;
    this.estimate = taskConstructor.estimate;
    this.timeSpent = taskConstructor.timeSpent;
    this.createdAt = taskConstructor.createdAt;
    this.updatedAt = taskConstructor.updatedAt;
  }

  get timeRemaining(): Function {
    return this.calcTimeRemaining;
  }
  private calcTimeRemaining(): number {
    return this.estimate - this.timeSpent;
  }
}

export default Task;
