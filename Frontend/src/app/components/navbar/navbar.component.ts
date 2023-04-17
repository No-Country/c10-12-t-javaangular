import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faUser = faUser;
  faBars = faBars;
  faXmark = faXmark;

  user: User | null = null;
  user$: Observable<User | null> = this.auth.user$;

  isOptionsMenuOpen = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.setUser();
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }

  toggleOptionsMenu(): void {
    this.isOptionsMenuOpen = !this.isOptionsMenuOpen;
  }

}
