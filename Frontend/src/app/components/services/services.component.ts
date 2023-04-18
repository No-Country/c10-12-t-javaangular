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
      'img': '../../../assets/img/empleos.png',
      'titulo': 'Sitios de empleos',
      'descripcion': 'Encontrá tu nuevo y proóximo trabajo.',
      'url': '/jobs',
    },
    {
      'img': '../../../assets/img/couchsurfing.png',
      'titulo': 'Couchsurfing',
      'descripcion': 'Alojamiento gratuito en hogar local.',
      'url': '/alojamiento',
    },
    {
      'img': '../../../assets/img/comunidad.png',
      'titulo': 'Comunidad',
      'descripcion': 'Saber dónde contratar servicios.',
      'url': '/comunidad',
    },
    {
      'img': '../../../assets/img/tramites.png',
      'titulo': 'Trámites legales',
      'descripcion': 'Recursos y guías para migrantes.',
      'url': 'https://www.argentina.gob.ar/interior/migraciones',
    },
    {
      'img': '../../../assets/img/transporte.png',
      'titulo': 'Medios de transporte',
      'descripcion': 'Descubrí cómo viajar por el país.',
      'url': 'https://www.argentina.gob.ar/transporte',
    },
    {
      'img': '../../../assets/img/salud.png',
      'titulo': 'Centros de salud',
      'descripcion': 'Conocé los lugares de emergencia.',
      'url': 'https://buenosaires.gob.ar/establecimientos-hospitales-y-centros-de-salud',
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
