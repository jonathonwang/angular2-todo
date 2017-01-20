export const template: string = `
  <navbar [title]="title" [visibleTasks]="visibleTasks" (modalOpened)="toggleTaskModal()" (visibleTasksChanged)="filterVisibleTasks($event)"></navbar>

  <div class="container-fluid">
    <div class="row">
      <ng-container *ngIf="this.visibleTasks === 'active'">
        <task-list [status]="'planned'" [tasks]="taskFilter('planned')" [totalEstimate]="totalEstimate('planned')" (modalWasOpened)="toggleTaskModal('planned')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown" (deleteModalWasOpened)="toggleDeleteModal($event)" (editModalWasOpened)="toggleEditModal($event)"></task-list>

        <task-list [status]="'in-progress'" [tasks]="taskFilter('in-progress')" [totalEstimate]="totalEstimate('in-progress')" (modalWasOpened)="toggleTaskModal('in-progress')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown" (deleteModalWasOpened)="toggleDeleteModal($event)" (editModalWasOpened)="toggleEditModal($event)"></task-list>

        <task-list [status]="'completed'" [tasks]="taskFilter('completed')" (modalWasOpened)="toggleTaskModal('completed')" [totalEstimate]="totalEstimate('completed')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown" (deleteModalWasOpened)="toggleDeleteModal($event)" (editModalWasOpened)="toggleEditModal($event)"></task-list>
      </ng-container>
      <ng-container *ngIf="this.visibleTasks === 'archive'">
        <task-list [status]="'archived'" [tasks]="taskFilter('archived')" (modalWasOpened)="toggleTaskModal('archived')" [totalEstimate]="totalEstimate('archived')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown" (deleteModalWasOpened)="toggleDeleteModal($event)" (editModalWasOpened)="toggleEditModal($event)"></task-list>
      </ng-container>
    </div>
  </div>

  <create-modal [isModalOpen]="isModalOpen" [newTask]="newTask" (formSubmitted)="createTask(newTask)" (modalClosed)="toggleTaskModal();"></create-modal>

  <edit-modal [isEditModalOpen]="isEditModalOpen" [editTask]="editTask" (editModalFormWasSubmitted)="submitEditTaskForm($event)" (editModalFormWasClosed)="toggleEditModal()"></edit-modal>

  <delete-modal [isDeleteModalOpen]="isDeleteModalOpen" [deleteTaskId]="deleteTaskId" (deleteFormWasSubmitted)="removeTask(deleteTaskId)" (deleteModalWasClosed)="toggleDeleteModal()"></delete-modal>

  <alert [visible]="alert.visible" [status]="alert.status" [message]="alert.message" (alertClosed)="closeAlert()"></alert>

`;

export default template;
