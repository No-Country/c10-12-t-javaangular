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
  img64:string|undefined;
  public perfil = new BehaviorSubject<any | null>(null);  
  
  // private apiUrl = environment.supabase.url;
  // private supabaseKey = environment.supabase.publicKey;

  // supabaseClient = createClient(this.apiUrl, this.supabaseKey);
  SUPABASE_URL = environment.supabase.url;
  SUPABASE_KEY = environment.supabase.publicKey;

  supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);

  constructor(
    private auth: AuthService,
    private http: HttpClient,
  ) { /* this.getProfile() */
  /*   let id=this.auth.idUsuarios(); */
    /* console.log(id) */
  /*  this.findByIdProfile(id); */
  }


  /* apiUrl = 'https://xbslofkvpgejobohqcqp.supabase.co';
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhic2xvZmt2cGdlam9ib2hxY3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mjg2NzUsImV4cCI6MTk5NzAwNDY3NX0.kUbt1mX5Z_SWaB2gwsEjPNga07MsSw8o5yKImiWLRQo'; */

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
      console.log(token);
      const headers = new HttpHeaders({
        apikey: this.supabaseKey,
        Authorization: `Bearer ${token}`
      });
      const options = { headers: headers };
      this.http.post(url, per, options).subscribe({
        next: () => {
  
         console.log('asd')
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
          this.perfil.next(data)
          
        }
      }
    )
    
  }

  getPerfil(){
    this.findByIdProfile();
    return this.perfil.asObservable();
  }


  }


