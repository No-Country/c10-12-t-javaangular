import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'Frontend';

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Se hizo clic en el body');
  }
}
