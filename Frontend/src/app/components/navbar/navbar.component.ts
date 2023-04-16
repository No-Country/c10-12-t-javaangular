import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faUser = faUser;


  user: User | null = null;
  user$: Observable<User | null> = this.auth.user$;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.auth.setUser();
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }

  isOptionsMenuOpen = false;

  toggleOptionsMenu(): void {
    this.isOptionsMenuOpen = !this.isOptionsMenuOpen;
  }

}
