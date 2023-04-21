import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createClient, SupabaseClient, User, AuthApiError } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileService } from './profile.service';



interface Credentials {
  email: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private supabaseClient: SupabaseClient;
  public userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private afAuth: Auth,
    private router: Router) {
    this.supabaseClient = createClient(environment.supabase.url, environment.supabase.publicKey);
  }

  getSession() {
    if (localStorage.getItem('sb-olndhblmfhgdfnajbzya-auth-token')) {
      return JSON.parse(localStorage.getItem('sb-olndhblmfhgdfnajbzya-auth-token') || '{}');
    } else {
      console.log('no hay usuario');
    }
  }

  public access_token() {
    if (localStorage.getItem('sb-olndhblmfhgdfnajbzya-auth-token')) {
      return this.getSession()['access_token'];
    } else {
      console.log('no hay usuario');
    }
  }

  public idUsuarios(){
    if (localStorage.getItem('sb-olndhblmfhgdfnajbzya-auth-token')) {
      return this.getSession()['user']['id'];
    } else {
      console.log('no hay usuario');
    }
  }

  getEmail() {
    return this.getSession()['user']['email'];
  }

  async signUp(credentials: Credentials): Promise<any>{
    await this.supabaseClient.auth.signUp(credentials);
  }

  async signIn(credentials: Credentials): Promise<void> {
    try {
      const { data, error } = await this.supabaseClient.auth.signInWithPassword(credentials);
    
      if (error) {
        throw new Error(error.message); // Lanza excepción en caso de error de autenticación
      }
      this.setUser();
      await this.router.navigate(['/profile']);
    } catch (error) {
      console.log('auth error:', error);
      throw new Error('Error de autenticación'); // Lanza excepción para manejar errores de manera más efectiva
    }
  }
 

/*  async login(credenciales:any){let { data, error } = await this.supabaseClient.auth.signInWithPassword(
   credenciales
   
  )
  this.setUser();
  await this.router.navigate(['/profile']);
  }
 */

  async signOut(): Promise<any | null>{
    this.userSubject.next(null);
    this.user$ = this.userSubject.asObservable();
    await this.supabaseClient.auth.signOut();
  }

  public setUser(): Observable<any> {
    let user: any;
    if (localStorage.getItem('sb-olndhblmfhgdfnajbzya-auth-token')) {
      user = this.getSession()['user'];
    }
    this.userSubject.next(user);
    this.user$ = this.userSubject.asObservable();
    return this.userSubject.asObservable()
  }

}
