import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  //   styleUrls: ['warning.component.css'],
  styles: [
    `
      h4 {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningComponent {}
