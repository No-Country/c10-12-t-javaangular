import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  offers: any = [];
  offers$!: Observable<any[]>;
  editOfferId: number | undefined;
  userOffers: any = [];
  appliedOffers: any = [];

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getAllOffers(): Observable<any[]> {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.get<any[]>(url, options);
  }

  createJob(job: string) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.post(url, job, options).subscribe();
  }

  updateJob(jobOffer: any, id: number) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.patch(`${url}?id=eq.${id}`, jobOffer, options);
  }

  deleteJob(id: number) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.delete(`${url}?id=eq.${id}`, options).subscribe();
  }

  findByIdJob(id: number) {
    const url = `${this.apiUrl}/rest/v1/trabajo`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    console.log('id jobService', id)
    return this.http.get(`${url}?id=eq.${id}`, options);
  }

}
