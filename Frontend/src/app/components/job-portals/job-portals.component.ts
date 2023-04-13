import { Component } from '@angular/core';

@Component({
  selector: 'app-job-portals',
  templateUrl: './job-portals.component.html',
  styleUrls: ['./job-portals.component.css']
})
export class JobPortalsComponent {

  portals = [
    {
      'name': 'Indeed',
      'description': 'Indeed es la página web de empleo con más de 300 millones de usuarios únicos mensuales. Indeed se esfuerza por dar prioridad a los candidatos, ofreciéndoles acceso gratuito al sitio para que busquen empleos, publiquen CV e investiguen a las empresas.',
      'url': 'https://ar.indeed.com',
      'img': '../../../assets/img/indeed.png'
    },
    {
      'name': 'Zonajobs',
      'description': 'ZonaJobs es el sitio líder en ofertas de empleo y oportunidades de trabajo para postulantes y que brinda las mejores soluciones para que las empresas puedan llevar adelante el proceso de reclutamiento y selección de personal de manera fácil, rápida, y eficiente.',
      'url': 'https://www.zonajobs.com.ar',
      'img': '../../../assets/img/zonajobs.png'
    },
    {
      'name': 'Bumeran',
      'description': 'Es un portal de empleos y reclutamiento online, líder experto en reclutamiento online y avisos de empleo por internet con operaciones en los principales mercados de Argentina, México, Venezuela, Perú, Chile, Ecuador y Panamá',
      'url': 'https://www.bumeran.com.ar',
      'img': '../../../assets/img/bumeran.png'
    },
    {
      'name': 'Computrabajo',
      'description': 'Computrabajo es la web de empleo líder en Latinoamérica. Encuentra miles de empleos adecuados a tu perfil. Sube tu currículum gratis y sé visible para miles de empresas.',
      'url': 'https://ar.computrabajo.com',
      'img': '../../../assets/img/computrabajo.png'
    }
  ];

}
