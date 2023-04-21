import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  editOfferId: number | undefined;

  offers = new BehaviorSubject<any | null>(null);
  userJobs = new BehaviorSubject<any | null>(null);

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getOffersObservable() {
    this.getAllOffers();
    return this.offers.asObservable();
  }

  getAllOffers(): void {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get<any[]>(url, options).subscribe({
      next: (res) => {
        this.offers.next(res);
      },
      error: error => console.log(error)
    });
  }

  createJob(job: any) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    console.log(token);
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`
    });
    const options = { headers: headers };
    this.http.post(url, job, options).subscribe({
      next: (data) => {
        this.getAllOffers();
        this.getUserJobs();
      },
      error:(error)=>{
        console.log(error)
      }
    });
  }

  updateJob(jobOffer: any, id: number) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.patch(`${url}?id=eq.${id}`, jobOffer, options).subscribe({
      next: () => {
        this.getAllOffers();
        this.getUserJobs();
      }
    })
  }

  deleteJob(id: number) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.delete(`${url}?id=eq.${id}`, options).subscribe({
      next: () => {
        this.getAllOffers();
        this.getUserJobs();
      }
    });
  }

  findByIdJob(id: number) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.get(`${url}?id=eq.${id}`, options);
  }

  // recuperar ofertas de trabajo creadas por el usuario
  getUserJobs() {
    let idd = this.auth.idUsuarios();
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get(`${url}?user_id=eq.${idd}`, options).subscribe({
      next: (data) => {
        this.userJobs.next(data);
      }
    });
  }

  getUserJobsObservable() {
    this.getUserJobs();
    return this.userJobs.asObservable();
  }

}
