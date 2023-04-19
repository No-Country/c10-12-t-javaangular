import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  public events = new BehaviorSubject<any | null>(null); 

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  createEvent(event: any) {
    const url = `${this.apiUrl}/rest/v1/eventos`;
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
        this.getAllEvents();
      },
      error:(error)=>{
      }
    });
  }

  getAllEvents(): void {
    const url = `${this.apiUrl}/rest/v1/eventos`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get<any[]>(url, options).subscribe({
      next: (res) => {
        this.events.next(res);
        console.log(res)
      },
      error: error => console.log(error)
    });
  }
  
  getEvents() {
    this.getAllEvents();
    return this.events.asObservable();
  }
  

}
