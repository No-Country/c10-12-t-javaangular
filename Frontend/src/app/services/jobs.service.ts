import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  offers: any = [];
  offers$!: Observable<any[]>;

  userOffers: any = [];
  appliedOffers: any = [];
  supabaseClient: any;
  
  
  
  constructor(private http: HttpClient,private auth:AuthService) { }

/*   getOffers(): void {
    this.offers$ = of(this.offers);
  } */

  getUserOffers() {

  }

  getAppliedOffers() {

  }

/*   createOffer(newOffer: any) {
    this.offers.push(newOffer);
    this.userOffers.push(newOffer);
    this.offers$ = of(this.offers);
  } */

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
    return this.http.get<any[]>('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo',options);
  }


 createJob(job:string){
    const url = `${this.supabaseClient}/rest/v1/trabajo`;
    /* const token = this.tokenService.getToken(); */
    if(this.auth.datosUsuarios()){
      var Id_user=this.auth.idUsuarios();
        var token= this.auth.access_token();
    }
  
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
    console.log('jobService',job);
    

    return  this.http.post('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo',job,options).subscribe(res=>{console.log('respuesta',res)});
    
    
  }

  updateJob(id:number){
    const url = `${this.supabaseClient}/rest/v1/trabajo`;
    /* const token = this.tokenService.getToken(); */
    if(this.auth.datosUsuarios()){
      var Id_user=this.auth.idUsuarios();
        var token= this.auth.access_token();
    }
  
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
    /*s */
    

    return  this.http.put('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo',id,options).subscribe(res=>{console.log('respuesta',res)});
    
    
  }

  deleteJob(): Observable<any[]> {
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
    return this.http.delete<any[]>('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo', options);
  }



}
