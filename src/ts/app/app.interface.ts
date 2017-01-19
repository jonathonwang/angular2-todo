export interface ITask {
  id: number;
  title: string;
  status: string;
  description: string;
  estimate: number;
  timeSpent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAppComponent {
  // State
  title: string;
  // Task Array State
  tasks: Array<ITask>;
  // New Task State
  newTask: ITask;
  // Edit Task State
  editTask: Object;
  // Alert State
  alert: Object;
  deleteTaskId: number;
  activeDropdown: number;
  isModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isEditModalOpen: boolean;
  // Methods
  // Filter Tasks By Status
  taskFilter(taskStatus: string): Array<ITask>;
  // Calculate Estimate for all tasks in a given Status
  totalEstimate(taskStatus: string): number;
  // Toggle Task Create Modal Open / Closed
  toggleTaskModal(status?: string): void;
  // Create A New Task and push into Tasks Array
  createTask(taskData: Object): void;
  // Reset newTask State to original
  resetNewTaskFields(): void;
  // Show Alert
  showAlert(status: string, message: string): void;
  // Close Alert
  closeAlert(): void;
  // Toggle Task Dropdown
  toggleDropdown(taskId?: number): void;
  // Change the Status of a Task
  changeTaskStatus(taskData: Object): void;
  // Toggle Delete Modal Open / Close
  toggleDeleteModal(taskId?: number): void;
  // Remove Task from Task Array in State
  removeTask(taskId: number): void;
  // Reset Delete Task Id to original State
  resetDeleteTaskId(): void;
  // Toggle Edit Modal Open / Close
  toggleEditModal(taskId?: number): void;
  // Populate Edit Task Form with Task Data
  populateEditTaskForm(editTask: Object): void;
  // Replace Task in Task Array with Edited Task;
  submitEditTaskForm(editTask: Object): void;
  // Reset Edit Task to original State
  resetEditTask(): void;
}
