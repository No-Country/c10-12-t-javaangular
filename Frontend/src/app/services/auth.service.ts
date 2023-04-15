import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
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

  constructor(private afAuth: Auth) {
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

  async signUp(credentials: Credentials): Promise<any>{
    await this.supabaseClient.auth.signUp(credentials);
  }

  async signIn(credentials: Credentials): Promise<any> {
    try {
      const { data, error } = await this.supabaseClient.auth.signInWithPassword(credentials);
      if (error) {
        return error;
      }
      this.setUser();
      return user;

    } catch (error) {
      return error as AuthApiError;
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
