import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { User } from '@supabase/supabase-js';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faUser = faUser;
  faBars = faBars;
  faXmark = faXmark;

  user: any | undefined = undefined;

  isOptionsMenuOpen = false;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profileService.getPerfil().subscribe({
      next: (data) => {
        this.user = data[0];
      }
    });
  }

  async logout() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }

  toggleOptionsMenu(): void {
    this.isOptionsMenuOpen = !this.isOptionsMenuOpen;
  }

}
