import { ITask } from './app.interface';

export class Task implements ITask {
  public title;
  public status;
  public description;
  public estimate;
  public timeSpent;
  public createdAt;
  public updatedAt;
  constructor(taskConstructor: ITask) {
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
