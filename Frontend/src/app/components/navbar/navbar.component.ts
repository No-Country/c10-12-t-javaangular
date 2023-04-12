import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faUser = faUser;

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
    // location.reload();
  }

  isOptionsMenuOpen = false;

  toggleOptionsMenu(): void {
    this.isOptionsMenuOpen = !this.isOptionsMenuOpen;
  }

}
