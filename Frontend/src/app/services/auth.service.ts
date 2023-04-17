import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createClient, SupabaseClient, User, AuthApiError } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return JSON.parse(localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token') || '{}');
  }

  public access_token() {
    return this.getSession()['access_token'];
  }

  public idUsuarios(){
    return this.getSession()['user']['id'];
  }

  getEmail() {
    return this.getSession()['user']['email'];
  }

  async signUp(credentials: Credentials): Promise<any>{
    await this.supabaseClient.auth.signUp(credentials);
    await this.signIn(credentials);
    await this.router.navigate(['/profile'])
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

  signOut(): Promise<{ error: any | null }>{
    this.userSubject.next(null);
    this.user$ = this.userSubject.asObservable();
    return this.supabaseClient.auth.signOut()
  }

  public setUser(): void {
    let user = this.getSession()['user'];
    this.userSubject.next(user);
    this.user$ = this.userSubject.asObservable();
  }

}
