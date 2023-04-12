import { Component, HostListener } from '@angular/core';
import { faHouse, faCalendarDays, faComments, faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forums = [
    {
      'titulo': 'permiso para conducir',
      'saludo': 'Hola comunidad',
      'nombre':'pancho',
      'meGusta': '30',
      'descripcion': 'Me encuentro buscando información sobre cómo puedo conseguir una licencia de conducir en argentina y si me podran validar la cédula de mi país.'
    },
    {
      'titulo': 'Necesito un consejo',
       
      'nombre':'fernando',
      'saludo': 'Hola comunidad',
      'meGusta': '30',
      'descripcion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }
  ]
  contribuidores=[
    {
      'nombre':'fernando',
      'meGusta': '30',
    },
    {
      'nombre':'pancho',
      'meGusta': '36',
    }
  ]


  
  faHouse = faHouse;
  faCalendari = faCalendarDays;
  faComent = faComments;
  faHeart = faHeart;
  faMessage = faMessage;
}
