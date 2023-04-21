import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ){}
  canActivate(): boolean {

    const token = this.auth.access_token();
    if (!token) {
       console.log('alo')
      this.router.navigate(['/login']);
      return false;
    }
    return true
  }
}
