import { Component } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {
      'titulo': 'Sitios de empleos',
      'url': '/jobs',
      'img': '../../../assets/img/empleos.png'
    },
    {
      'titulo': 'Couchsurfing',
      'url': '/alojamiento',
      'img': '../../../assets/img/couchsurfing.png'
    },
    {
      'titulo': 'Comunidad',
      'url': '/comunidad',
      'img': '../../../assets/img/comunidad.png'
    }
  ]

  isLogged$: Observable<User | null> = this.auth.user$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.setUser();
  }

}
