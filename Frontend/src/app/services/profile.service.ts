import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { updateProfile } from '@firebase/auth';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

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


  // submitProfile(profile: any) {
  //   const url = `${this.apiUrl}/rest/v1/profile`;
  //   const token = this.auth.access_token();
  //   const headers = new HttpHeaders({
  //     apikey: this.supabaseKey,
  //     Authorization: `Bearer ${token}`
  //   });
  //   const options = { headers: headers };
  //   this.http.post(url, profile, options).subscribe({
  //     next: () => {
  //       // this.submitProfile();
  //     }
  //   });
  // }


  /* apiUrl = 'https://xbslofkvpgejobohqcqp.supabase.co';
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhic2xvZmt2cGdlam9ib2hxY3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mjg2NzUsImV4cCI6MTk5NzAwNDY3NX0.kUbt1mX5Z_SWaB2gwsEjPNga07MsSw8o5yKImiWLRQo'; */

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  // createProfile(): Observable<any> {
  //   const url = `${this.apiUrl}/rest/v1/profile`;
  //   const token = 'your-supabase-token';

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'apikey': this.supabaseKey,
  //     'Authorization': `Bearer ${token}`
  //   });

  //   const options = { headers: headers };

  //   return this.http.post(url,{"name": "paula"}, options);
  // }




 /*  async createProfile(name: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('profile')
      .insert({ name: name })
      .single();

    if (error) {
      console.error(error);
      return throwError(error);
    } else {
      console.log(data);
      return of(data);
    }
  }
 */

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

    return this.http.patch(`${url}?user_id=eq.${idd}`,perfil,options).subscribe(res=>{console.log(res)});
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
    return this.http.get(`${url}?user_id=eq.${idd}`, options).subscribe(res=>{console.log(res)});
  }
  }


