import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faFile, faFileShield, faShield } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-info',
  templateUrl: './nav-info.component.html',
  styleUrls: ['./nav-info.component.css']
})
export class NavInfoComponent {

  faFile = faFile;
  faFileShield = faFileShield;
  faShield = faShield;

  title: 'Términos y condiciones' | 'Protección de datos' | 'Política de cookies' = 'Términos y condiciones';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('ruta cambiada', event.url);
        switch (event.url) {
          case '/info/terms':
            this.title = 'Términos y condiciones';
            break;
          case '/info/cookies':
            this.title = 'Política de cookies';
            break;
          case '/info/data-protection':
            this.title = 'Protección de datos';
            break;

          default:
            break;
        }
      }
    })
  }

}