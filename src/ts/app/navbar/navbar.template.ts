export const template = `
  <div class="container-fluid">
    <div class="navbar row">
      <div class="col-lg-6">
        <h1>{{title}}</h1>
      </div>
      <div class="col-lg-6">
        <button class="btn btn-primary pull-right" (click)="modalWasOpened()">
        Create Task
        </button>
      </div>
    </div>
  </div>
`;

export default template;
