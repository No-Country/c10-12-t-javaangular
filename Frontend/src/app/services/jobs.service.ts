import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  offers: any = [];
  offers$!: Observable<any[]>;

  userOffers: any = [];
  appliedOffers: any = [];
  supabaseClient: any;
  auth: any;


  constructor(private http: HttpClient) { }

/*   getOffers(): void {
    this.offers$ = of(this.offers);
  } */

  getUserOffers() {

  }

  getAppliedOffers() {

  }

  // createOffer(newOffer: any) {
  //   this.offers.push(newOffer);
  //   this.userOffers.push(newOffer);
  //   this.offers$ = of(this.offers);
  // }

  editOffer(editedOffer: any) {

  }

  getAllOffers(): Observable<any[]> {
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


  createJob(job: any): void {
    const url = `${this.supabaseClient}/rest/v1/trabajo`;
    /* const token = this.tokenService.getToken(); */
    console.log('job desde jobsService', job)
    const token= this.auth.access_token();
    console.log(token)
    if (token) {
      /* this.token = JSON.parse(token) */
      console.log('hay token', token)
    }
    const headers = new HttpHeaders({
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhic2xvZmt2cGdlam9ib2hxY3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mjg2NzUsImV4cCI6MTk5NzAwNDY3NX0.kUbt1mX5Z_SWaB2gwsEjPNga07MsSw8o5yKImiWLRQo',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    this.http.post('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo', job);
  }

  // deleteJob(): Observable<any[]> {
  //   const url = `${this.supabaseClient}/rest/v1/trabajo`;
  //   /* const token = this.tokenService.getToken(); */
  //   const token= this.auth.access_token();
  //   console.log(token)
  //   if (token) {
  //     /* this.token = JSON.parse(token) */
  //     console.log('hay token', token)
  //   }
  //   const headers = new HttpHeaders({
  //     apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhic2xvZmt2cGdlam9ib2hxY3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mjg2NzUsImV4cCI6MTk5NzAwNDY3NX0.kUbt1mX5Z_SWaB2gwsEjPNga07MsSw8o5yKImiWLRQo',
  //     Authorization: `Bearer ${token}`,
  //     // 'Content-Type': 'application/json'
  //   });
  //   const options = { headers: headers };
  //   return this.http.delete<any[]>('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo', options);
  // }

  deleteJob(id: number): Observable<any[]> {
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
    return this.http.delete<any[]>(`https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo?id=eq.${id}`, options);
  }




}
