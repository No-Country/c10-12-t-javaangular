import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState, user } from '@angular/fire/auth';
import { createClient, Session, SupabaseClient, User, AuthApiError, AuthSession } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { USER_STORAGE_KEY } from '../constants/constant';

interface Credentials {
  email: string;
  password: string
}

type supabaseResponse = User | Session | AuthApiError | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // authState$ = authState(this.afAuth);
  private supabaseClient: SupabaseClient;
  public userSubject = new BehaviorSubject<User | null>(null);

  constructor(private afAuth: Auth) {
    this.supabaseClient = createClient(environment.supabase.url, environment.supabase.publicKey);
    // const session = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '{}');
/*     const session = JSON.parse(localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token') || '{}');
    console.log(session['access_token']) */
    // this.userSubject.next(session.user);
  }

  public access_token(){
    const session = JSON.parse(localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token') || '{}');
   /*  console.log(session['user']['email'])  */
   return session['access_token'];
  }

  public datosUsuarios(){
    const session = JSON.parse(localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token') || '{}');
 /*    console.log(session['user']['email'])  */
    return session['user']['email'];
  }

 get user(): User | null {
    return this.userSubject.getValue();
  }

  /* firebase */
  // async register(email: string, password: string) {
  //   const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
  //   return await signInWithEmailAndPassword(this.afAuth, email, password);
  // }

  // login(email: string, password: string) {
  //   return signInWithEmailAndPassword(this.afAuth, email, password);
  // }

  // logout() {
  //   return signOut(this.afAuth);
  // }


  async signUp(credentials: Credentials): Promise<any>{
    await this.supabaseClient.auth.signUp(credentials);
  }


  async signIn(credentials: Credentials): Promise<any> {
    try {
      const { data, error } = await this.supabaseClient.auth.signInWithPassword(credentials);
      if (error) {
        return error;
      }
      const user = data?.user;
      this.setUser(user);
      return user;

    } catch (error) {
      return error as AuthApiError;
    }
  }

  signOut(): Promise<{ error: any | null }>{
    this.userSubject.next(null);
    return this.supabaseClient.auth.signOut()
  }


  private userSource = new BehaviorSubject<{ user: User | null }>({ user: null });
  user$ = this.userSource.asObservable();

  public setUser(user: any): void {
    const session = JSON.parse(localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token') || '{}');
    this.userSubject.next(user);
    if (session?.session) {
      console.log(session.session.access_token);
      console.log('desde setUser authService',session.session.user);
    } else {
      console.log('No se pudo obtener la sesión actual');
    }
    this.userSource.next({ user });
  }


}
