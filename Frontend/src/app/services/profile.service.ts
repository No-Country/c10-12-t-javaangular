import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { updateProfile } from '@firebase/auth';
import { createClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit {

  private apiUrl = environment.supabase.url;
  private supabaseKey = environment.supabase.publicKey;

  supabaseClient = createClient(this.apiUrl, this.supabaseKey);
  SUPABASE_URL = environment.supabase.url;
  SUPABASE_KEY = environment.supabase.publicKey;

  supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);

  constructor(
    private auth: AuthService,
    private http: HttpClient,
  ) { }

  email: any = '';

  ngOnInit() {
    // this.getProfile()
    console.log(this.email = this.auth.getEmail())
    console.log('email desde el profile', this.email)
  }

  session: any;



//   async getProfile() {
//     this.session = this.auth.getSession()
//     if (this.session) {
//       const { data, error } = await this.supabase.from('profiles').select('*').eq('user_id', this.session.user.id);
//       console.log('data y error desde profile-service', data, error)
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(data[0]);
//       }
//   }
// }

// async getPerfil() {
//   try {
//     const { data: perfil, error } = await this.supabase
//       .from('perfil')
//       .select('photo')
//       .eq('id', 1);

//     if (error) {
//       throw error;
//     }
//     return perfil;

//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

  // updateProfile(photo: any, id: number) {
  //   const url = `${this.apiUrl}/rest/v1/perfil`;
  //   const token = this.auth.access_token();
  //   const headers = new HttpHeaders({
  //     apikey: this.supabaseKey,
  //     Authorization: `Bearer ${token}`,
  //   });
  //   const options = { headers: headers };
  //   this.http.patch(`${url}`, photo, options)
    // .subscribe(res => {
    //   // return this.getPerfil();
    // })}



// ChatGPT

// async getProfile(userId: string): Promise<any> {
//   const { data, error } = await this.supabaseClient
//     .from('profiles')
//     .select('*')
//     .eq('user_id', userId);

//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//     return data;
//   }
// }

// async updateProfile(userId: string, updates: any): Promise<any> {
//   const { data, error } = await this.supabaseClient
//     .from('profiles')
//     .update(updates)
//     .eq('user_id', userId)
//     .single();

//   if (error) {
//     throw error;
//   }

//   return data;
// }
// }
// }
//   async getProfile() {
//     this.session = this.auth.getSession()
//     if (this.session) {
//       const { data, error } = await this.supabase.from('profiles').select('*').eq('user_id', this.session.user.id);
//       console.log('data y error desde profile-service', data, error)
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(data[0]);
//       }
//     }
//   }

//   updateProfile() {
//     alert('Tu perfil se ha actualizado')
//   }

}
