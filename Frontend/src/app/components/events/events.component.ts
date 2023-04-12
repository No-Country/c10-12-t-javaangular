import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  Events = [
    {
      'fecha': "22 de septiembre",
      'hora':"19:00hs",
      'descripcion':"Gran Encuentro",
      'confirmacion':'5 personas confirmaron',
      'lugar':"jardin botanico"
    },
    {
      'fecha': "05 de octubre",
      'hora':"20:00hs",
      'descripcion':"Los pericos",
      'confirmacion':'4 personas confirmaron',
      'lugar':"plaza central"
    },
    {
      'fecha': "24 de diciembre",
      'hora':"00:00hs",
      'descripcion':"fiesta de navidad",
      'confirmacion':'100 personas confirmaron',
      'lugar':"plaza central"
    },
  ]

}
