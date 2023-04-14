import { Component } from '@angular/core';

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

}
