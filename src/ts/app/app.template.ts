export const template: string = `
  <navbar [title]="title" (modalOpened)="toggleTaskModal()"></navbar>

  <div class="container-fluid">
    <div class="row">
      <task-list [status]="'planned'" [tasks]="taskFilter('planned')" [totalEstimate]="totalEstimate('planned')" (modalWasOpened)="toggleTaskModal('planned')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown"></task-list>

      <task-list [status]="'in-progress'" [tasks]="taskFilter('in-progress')" [totalEstimate]="totalEstimate('in-progress')" (modalWasOpened)="toggleTaskModal('in-progress')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown"></task-list>

      <task-list [status]="'completed'" [tasks]="taskFilter('completed')" (modalWasOpened)="toggleTaskModal('completed')" [totalEstimate]="totalEstimate('completed')" (dropdownWasToggled)="toggleDropdown($event)" (taskWasMoved)="changeTaskStatus($event)" [activeDropdown]="activeDropdown"></task-list>
    </div>
  </div>

  <create-modal [isModalOpen]="isModalOpen" [newTask]="newTask" (formSubmitted)="createTask(newTask)" (modalClosed)="toggleTaskModal();"></create-modal>

  <alert [visible]="alert.visible" [status]="alert.status" [message]="alert.message" (alertClosed)="closeAlert()"></alert>
`;

export default template;
