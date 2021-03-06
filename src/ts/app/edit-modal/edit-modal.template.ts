export const template = `
  <div class="modal fade" [class.in]="isEditModalOpen" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" (click)="closeEditModalForm()" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Edit Task</h4>
        </div>
        <div class="modal-body">
        <!-- Begin Form -->
          <form (ngSubmit)="submitTaskForm($event)" #createTaskForm="ngForm">
            <div class="form-group">
              <label for="title">Title:</label>
              <input name="title" type="text" [(ngModel)]="editTask.title" class="form-control" placeholder="Task Title">
            </div>
            <div class="form-group">
              <label for="status">Status:</label>
              <select name="status" [(ngModel)]="editTask.status" required>
                <option value="planned">Planned</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              <textarea name="description" [(ngModel)]="editTask.description" class="form-control" placeholder="Description" rows="5"></textarea>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12">
                <div class="form-group">
                  <label for="estimate">Time Estimate: <small>(Minutes)</small></label>
                  <input name="estimate" type="number" [(ngModel)]="editTask.estimate" class="form-control" placeholder="Enter Minutes ex: 50">
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-xs-12">
                <div class="form-group">
                  <label for="timeSpent">Time Spent: <small>(Minutes)</small></label>
                  <input name="timeSpent" type="number" [(ngModel)]="editTask.timeSpent" class="form-control" placeholder="Enter Minutes ex: 10">
                </div>
              </div>
            </div>
          </form>
        <!-- End Form -->
        </div>
        <div class="modal-footer">
          <button type="button" (click)="closeEditModalForm()" class="btn btn-default pull-left">Cancel</button>
          <button type="button" (click)="submitEditModalForm(editTask)" class="btn btn-primary">Submit</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
`;

export default template;
