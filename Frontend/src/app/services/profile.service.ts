import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { updateProfile } from '@firebase/auth';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { BehaviorSubject, Observable, Subject, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  img64: string | undefined;

  perfil = new BehaviorSubject<any | null>({});
  userJobs = new BehaviorSubject<any | null>({});
  userEvents = new BehaviorSubject<any | null>({});
  
  SUPABASE_URL = environment.supabase.url;
  SUPABASE_KEY = environment.supabase.publicKey;

  supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) {}

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  updatePerfil(perfil: any) {
    let idd= this.auth.idUsuarios();
    const url = `${this.apiUrl}/rest/v1/perfil`;
    const token = this.auth.access_token();
    console.log(token)
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization:`Bearer ${token}`
    });
    const options = { headers: headers };

     this.http.patch(`${url}?user_id=eq.${idd}`,perfil,options).subscribe({
      next:()=>{
        this.findByIdProfile();
      }
     });
  }

  AutoCreateProfile(per: any) {
    const url = `${this.apiUrl}/rest/v1/perfil`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`
    });
    const options = { headers: headers };
    this.http.post(url, per, options).subscribe({
      next: () => {
        this.findByIdProfile();
      },
      error:(error)=>{
        console.log(error)
      }
    });
  } 

  findByIdProfile() {
    let idd= this.auth.idUsuarios();
    const url = `${this.apiUrl}/rest/v1/perfil`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get(`${url}?user_id=eq.${idd}`, options).subscribe(
      {
        next:(data)=>{
          this.perfil.next(data);
        }
      }
    );    
  }

  getPerfil(): Observable<any>{
    this.findByIdProfile();
    return this.perfil.asObservable();
  }

  setUserNull() {
    this.perfil.next(undefined);
  }

}


