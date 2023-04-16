import { Injectable } from '@angular/core';
import { updateProfile } from '@firebase/auth';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


SUPABASE_URL = environment.supabase.url;
SUPABASE_KEY = environment.supabase.publicKey;

supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);

  constructor(
    private auth: AuthService
  ) { }

  session: any;

  async getProfile() {
    this.session = this.auth.getSession()
    if (this.session) {
      const { data, error } = await this.supabase.from('profiles').select('*').eq('user_id', this.session.user.id);
      console.log('data y error desde profile-service', data, error)
      if (error) {
        console.error(error);
      } else {
        console.log(data[0]);
      }
  }
}

  updateProfile() {
    alert('Tu perfil se ha actualizado')
  }
}
