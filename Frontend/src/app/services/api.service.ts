import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { createClient } from '@supabase/supabase-js';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private auth : AuthService
  ) { }


  // apiUrl = environment.supabase.url;


  // getAllJobs(): Observable<any[]> {
  //   const url = `${this.apiUrl}/rest/v1/trabajo`;
  //   return this.http.get<any[]>(url);
  // }



  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;
  private supabaseClient = createClient(this.apiUrl, this.supabaseKey);

  //   findToken() {

  //     const token = localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token');

  //     if (token) {
  //       const jsonToken = JSON.parse(token)
  //       console.log('Token encontrado: ', jsonToken.access_token)
  //     } else {
  //       console.log('Token no encontrado')
  //     }
  // }

  token: any;
  // getAllJobs(): Observable<any[]> {
  //   const url = `${this.supabaseClient}/rest/v1/trabajo`;
  //   const token = localStorage.getItem('sb-xbslofkvpgejobohqcqp-auth-token');
  //   if (token) {
  //     this.token = JSON.parse(token)

  //   }
  //   const headers = new HttpHeaders({
  //     apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhic2xvZmt2cGdlam9ib2hxY3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mjg2NzUsImV4cCI6MTk5NzAwNDY3NX0.kUbt1mX5Z_SWaB2gwsEjPNga07MsSw8o5yKImiWLRQo',
  //     Authorization: `Bearer ${this.token}`,
  //     // 'Content-Type': 'application/json'
  //   });
  //   const options = { headers: headers };
  //   return this.http.get<any[]>('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo', options);
  // }





  getAllJobs(): Observable<any[]> {
    const url = `${this.supabaseClient}/rest/v1/trabajo`;
    /* const token = this.tokenService.getToken(); */
    const token= this.auth.access_token();
    console.log(token)
    if (token) {
      /* this.token = JSON.parse(token) */
      console.log('hay token', token)
    }
    const headers = new HttpHeaders({
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhic2xvZmt2cGdlam9ib2hxY3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mjg2NzUsImV4cCI6MTk5NzAwNDY3NX0.kUbt1mX5Z_SWaB2gwsEjPNga07MsSw8o5yKImiWLRQo',
      Authorization: `Bearer ${token}`,
      // 'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.get<any[]>('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo', options);
  }





}
