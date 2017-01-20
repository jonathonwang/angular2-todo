export const template = `
  <div class="container-fluid">
    <div class="navbar row">
      <div class="col-lg-6 col-md-6 col-sm-4 col-xs-4">
        <h1>
          {{title}}
        </h1>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-8 col-xs-8">
        <button class="btn btn-default pull-right" (click)="filterVisibleTasks('archive')" [class.active]="visibleTasks === 'archive'">Archived Tasks</button>
        <button class="btn btn-default pull-right" (click)="filterVisibleTasks('active')" [class.active]="visibleTasks === 'active'">Active Tasks</button>
      </div>
    </div>
  </div>
`;

export default template;
