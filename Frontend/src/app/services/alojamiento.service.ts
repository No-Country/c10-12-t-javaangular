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

  userCouchsurfing = new BehaviorSubject<any | null>({});

  // este id se setea cuando el usuario hace abre los dialog de update o delete desde la couchsurfing-card, cuando en el dialog se guardan los cambios o se elimina el post, se usa este valor en updateCouchsurfing() o deleteCouchsurfing() y despues se setea a undefined.
  idForUpdateOrDelete: number | undefined;

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

  createAlojamiento(couchsurfing: any) {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`
    });
    const options = { headers: headers };
    this.http.post(url, couchsurfing, options)
    .subscribe({
      next: (data) => {
        this.getAllAlojamientos();
        this.getUserCouchsurfing();
      },
      error:(error)=>{
      }
    });
  }

  getById() {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.get(`${url}?id=eq.${this.idForUpdateOrDelete}`, options);
  }

  updateCouchsurfing(couchsurfing: any) {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.patch(`${url}?id=eq.${this.idForUpdateOrDelete}`, couchsurfing, options).subscribe({
      next: () => {
        this.idForUpdateOrDelete = undefined;
        this.getAllAlojamientos();
        this.getUserCouchsurfing();
      }
    });
  }

  deleteCouchsurfing() {
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.delete(`${url}?id=eq.${this.idForUpdateOrDelete}`, options).subscribe({
      next: () => {
        this.getAllAlojamientos();
        this.getUserCouchsurfing();
      }
    });
  }

  // recuperar ofertas de alojamiento creadas por el usuario
  getUserCouchsurfing() {
    let idd = this.auth.idUsuarios();
    const url = `${this.apiUrl}/rest/v1/alojamiento`;
    const token = this.auth.access_token();
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get(`${url}?user_id=eq.${idd}`, options).subscribe(
      {
        next: (data) => {
          this.userCouchsurfing.next(data);
        }
      }
    );
  }

  getUserCouchsurfingObservable() {
    this.getUserCouchsurfing();
    return this.userCouchsurfing.asObservable();
  }

}