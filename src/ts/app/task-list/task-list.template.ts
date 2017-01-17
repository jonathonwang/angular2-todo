export const template = `
  <div class="col-lg-4">
    <div class="well category {{status}}">
      <div class="category-title">
        <h4 class="text-capitalize">{{status}}</h4>
      </div>
      <div class="category-body">
        <div class="task" *ngFor="let task of tasks">
          {{task.title}}
        </div>
      </div>
      <div class="category-status">
        <h5>Tasks: <span class="badge">{{tasks.length}}</span></h5>
        <h5>Total Estimate: <span class="badge">5 hours</span></h5>
      </div>
    </div>
  </div>
`;

export default template;
