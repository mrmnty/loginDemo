import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <flash-messages></flash-messages>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'login-app';
}
