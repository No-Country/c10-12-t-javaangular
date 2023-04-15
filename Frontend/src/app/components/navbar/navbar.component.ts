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

  // user$ = this.auth.authState$.pipe(
  //   filter(state => state ? true : false)
  // );

  user: User | null = null;
  user$: Observable<{ user: User | null }>;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.user$ = this.auth.user$;
    console.log(this.auth.access_token);
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.user = user.user;
    });
    //
    this.auth.user$.subscribe((userData) => {
      this.user = userData.user;
      console.log('ngOnInit de navbar',userData)
    });
    this.auth.userSubject.subscribe(user => {
      this.user = user;
      console.log('desde navbar component', this.user)
    });
    console.log('navbar res', this.user)
  }

  async logout() {
    // await this.auth.logout();
    await this.auth.signOut();
    this.router.navigate(['/login']);
    // location.reload();
  }

  isOptionsMenuOpen = false;

  toggleOptionsMenu(): void {
    this.isOptionsMenuOpen = !this.isOptionsMenuOpen;
  }

}
