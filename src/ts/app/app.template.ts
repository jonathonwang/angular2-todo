export const template: string = `
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <h1 class="text-center">{{title}}</h1>
      </div>
    </div>
    <div class="row">
      <task-list [status]="'planned'" [tasks]="plannedTasks()"></task-list>
      <task-list [status]="'in-progress'" [tasks]="inProgressTasks()"></task-list>
      <task-list [status]="'completed'" [tasks]="completedTasks()"></task-list>
    </div>
  </div>
`;

export default template;
