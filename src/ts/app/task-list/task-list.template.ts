export const template = `
  <div class="col-lg-4">
    <div class="well category {{status}}">
      <div class="category-title">
        <div class="col-xs-6">
          <h4 class="text-capitalize">{{status}}</h4>
        </div>
        <div class="col-xs-6">
          <button (click)="openModal(status)" class="btn btn-xs btn-rounded btn-create btn-default pull-right">+</button>
        </div>
      </div>
      <div class="category-body">
        <div class="task" *ngIf="tasks.length == 0">
          <h5 class="text-center text-capitalize">No {{status}} Tasks Available</h5>
        </div>
        <ng-container *ngIf="tasks.length > 0">
          <div class="task" *ngFor="let task of tasks">
            {{task.title}}
          </div>
        </ng-container>
      </div>
      <div class="category-status">
        <div class="row">
          <div class="col-xs-6 text-left">
            <h5 class="text-capitalize">
              {{status}} Tasks:
              <span class="badge">{{tasks.length}}</span>
            </h5>
          </div>
          <div class="col-xs-6 text-right">
            <h5>Total Estimate: <span class="badge">{{totalEstimate / 60}} hour{{totalEstimate / 60 > 1 ||  totalEstimate / 60 === 0 ? 's' : ''}}</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export default template;