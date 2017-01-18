export const template = `
  <div class="alert alert-{{status}} alert-dismissible text-center" [class.show]="visible" role="alert">
    <button type="button" class="close" (click)="closeAlert($event)" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <span class="alert-message"><strong class="text-capitalize">{{status}}!</strong> {{message}}</span>
  </div>
`;

export default template;
