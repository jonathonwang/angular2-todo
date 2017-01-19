export const template = `
  <div class="container-fluid">
    <div class="navbar row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h1>{{title}}</h1>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <button class="btn btn-primary pull-right" (click)="modalWasOpened()">
        Create Task
        </button>
      </div>
    </div>
  </div>
`;

export default template;
