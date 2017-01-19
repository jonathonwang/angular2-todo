export const template = `
<div class="modal fade" [class.in]="isDeleteModalOpen" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" (click)="closeDeleteTaskModal()" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Delete Task</h4>
      </div>
      <div class="modal-body">
        <h5>Are you sure you want to delete this task?</h5>
      </div>
      <div class="modal-footer">
        <button type="button" (click)="closeDeleteTaskModal()" class="btn btn-default">Close</button>
        <button type="button" (click)="submitDeleteTaskForm(deleteTaskId)" class="btn btn-primary">Delete</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
`;

export default template;
