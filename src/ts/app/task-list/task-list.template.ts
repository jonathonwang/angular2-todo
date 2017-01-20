export const template = `
  <div class="col-lg-4">
    <div class="well category {{status}}">
      <div class="category-title">
        <div class="col-xs-6">
          <h4 class="text-capitalize {{status}}">
            <span *ngIf="status == 'completed'" class="fa fa-check-circle-o"></span>
            <span *ngIf="status == 'in-progress'"class="fa fa-dot-circle-o"></span>
            <span *ngIf="status == 'planned'" class="fa fa-circle-o"></span>
            <span *ngIf="status == 'archived'" class="fa fa-circle"></span>
            {{status}}
          </h4>
        </div>
        <div class="col-xs-6">
          <button (click)="openModal(status)" class="btn btn-xs btn-rounded btn-create btn-default pull-right {{status}}">
            <span class="plus-text">+</span>
            <span class="create-text"> Create Task</span>
          </button>
        </div>
      </div>
      <div class="category-body">

        <div class="task" *ngIf="tasks.length == 0">
          <div class="task-title">
            <h5 class="text-center text-capitalize">No {{status}} Tasks Available</h5>
          </div>
        </div>


        <ng-container *ngIf="tasks.length > 0">
          <div class="task" *ngFor="let task of tasks">
            <div class="task-title {{status}}">
              <h5>
                {{task.title}}
                <div class="dropdown pull-right" [class.open]="activeDropdown == task.id">
                  <button (click)="openDropdown(task.id)" class="btn btn-default btn-borderless btn-xs pull-right dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-h fa-lg"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <li *ngIf="status == 'planned' || status == 'completed'"><a href="#" (click)="moveTask(task.id, 'in-progress')">Mark In-Progress</a></li>
                    <li *ngIf="status == 'in-progress'"><a href="#" (click)="moveTask(task.id, 'planned')">Mark Planned</a></li>
                    <li *ngIf="status == 'in-progress'"><a href="#" (click)="moveTask(task.id, 'completed')">Mark Completed</a></li>
                    <li *ngIf="status == 'completed'"><a href="#" (click)="moveTask(task.id, 'archived')">Mark Archived</a></li>
                    <li *ngIf="status == 'archived'"><a href="#" (click)="moveTask(task.id, 'completed')">Unarchive</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" (click)="openEditModal(task.id)">Edit</a></li>
                    <li><a href="#" (click)="openDeleteModal(task.id)">Delete</a></li>
                  </ul>
                </div>
              </h5>


            </div>
            <div class="task-body">
              <p>{{task.description}}</p>
            </div>
            <div class="task-footer">
              <div class="row">
                <div class="col-xs-6 text-left">
                  <p>
                    <small>
                      Estimate:
                      {{task.estimate / 60 >= 1 ? task.estimate / 60 : task.estimate }}
                      {{task.estimate / 60 >= 1 ? 'hours' : 'minutes'}}
                    </small>
                  </p>
                </div>
                <div class="col-xs-6 text-right">
                  <p>
                    <small>
                      Logged Work:
                      {{task.timeSpent / 60 >= 1 ? task.timeSpent / 60 : task.timeSpent }}
                      {{task.timeSpent / 60 >= 1 ? 'hours' : 'minutes'}}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ng-container>


      </div>
      <div class="category-status">
        <div class="row">
          <div class="col-xs-6 text-left">
            <h6 class="text-capitalize">
              {{status}} Tasks:
              <span class="badge {{status}}">{{tasks.length}}</span>
            </h6>
          </div>
          <div class="col-xs-6 text-right">
            <h6>
              Total Estimate:
              <span class="badge {{status}}">
                {{totalEstimate / 60 >= 1 ? totalEstimate / 60 : totalEstimate}}
                {{totalEstimate / 60 >= 1 ? 'hours' : 'minutes'}}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export default template;
