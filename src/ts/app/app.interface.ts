export interface IAppComponent {
  title: string;
  tasks: Array<ITask>;
}
export interface ITask {
  title: string;
  status: string;
  description: string;
  estimate: number;
  timeSpent: number;
  createdAt: Date;
  updatedAt: Date;
}
