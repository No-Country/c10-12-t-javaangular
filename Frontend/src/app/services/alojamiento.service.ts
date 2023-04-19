import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  public events = new BehaviorSubject<any | null>(null); 

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getAlojamientosObservable() {
    this.getAllAlojamientos();
    return this.events.asObservable();
  }

  getAllAlojamientos(): void {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get<any[]>(url, options).subscribe({
      next: (res) => {
        this.events.next(res);
      },
      error: error => console.log(error)
    });
  } 

  createAlojamiento(event: any) {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`
    });
    const options = { headers: headers };
    console.log(event)
    this.http.post(url, event, options)
    .subscribe({
      next: (data) => {
        this.getAllAlojamientos();
      },
      error:(error)=>{
      }
    });
  }

  updateCouchsurfing(couchsurfing: any, id: number) {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.patch(`${url}?id=eq.${id}`, couchsurfing, options).subscribe({
      next: () => {
        this.getAllAlojamientos();
      }
    });
  }

}