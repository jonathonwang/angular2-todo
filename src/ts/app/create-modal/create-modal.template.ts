export const template = `
<div class="modal fade" [class.in]="isModalOpen" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" (click)="closeModal($event)" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title text-center">Create Task</h4>
      </div>
      <div class="modal-body">
        <!-- Begin Form -->
          <form (ngSubmit)="submitTaskForm($event)" #createTaskForm="ngForm">
            <div class="form-group">
              <label for="title">Title:</label>
              <input name="title" type="text" [(ngModel)]="newTask.title" class="form-control" placeholder="Task Title">
            </div>
            <div class="form-group">
              <label for="status">Status:</label>
              <select name="status" [(ngModel)]="newTask.status" required>
                <option value="planned">Planned</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              <textarea name="description" [(ngModel)]="newTask.description" class="form-control" placeholder="Description" rows="5"></textarea>
            </div>
            <div class="form-group">
              <label for="estimate">Time Estimate:</label>
              <input name="estimate" type="text" [(ngModel)]="newTask.timeSpent" class="form-control" placeholder="Enter Minutes ex: 50">
            </div>
            <div class="form-group">
              <label for="timeSpent">Time Spent:</label>
              <input name="timeSpent" type="text" [(ngModel)]="newTask.timeSpent" class="form-control" placeholder="Enter Minutes ex: 10">
            </div>
          </form>
        <!-- End Form -->
      </div>
      <div class="modal-footer">
        <button type="button" (click)="closeModal($event)" class="btn btn-default">Close</button>
        <button type="button" (click)="submitTaskForm($event)" class="btn btn-primary">Submit</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
`;

export default template;
