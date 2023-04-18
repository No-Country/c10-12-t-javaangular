import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { updateProfile } from '@firebase/auth';
import { createClient } from '@supabase/supabase-js';
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
  ) {}


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


  apiUrl = 'https://your-supabase-url.com';
  supabaseKey = 'your-supabase-key';



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




  async createProfile(name: string): Promise<any> {
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



}
