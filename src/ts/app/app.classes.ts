import { ITask } from './app.interface';

export class Task implements ITask {
  public title;
  public status;
  public description;
  public estimate;
  public timeSpent;
  public createdAt;
  public updatedAt;
  constructor(title, status, description, estimate, timeSpent, createdAt, updatedAt) {
    this.title = title;
    this.status = status;
    this.description = description;
    this.estimate = estimate;
    this.timeSpent = timeSpent;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get timeRemaining() {
    return this.calcTimeRemaining;
  }
  private calcTimeRemaining() {
    return this.estimate - this.timeSpent;
  }
}

export default Task;
