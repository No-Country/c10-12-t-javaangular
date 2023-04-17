import { Component, OnInit } from '@angular/core';
import { faHouse,faCalendarDays,faComments,faHeart,faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  faHouse = faHouse;
  faCalendari = faCalendarDays;
  faComent = faComments;
  faHeart = faHeart;
  faMessage = faMessage;

  constructor() {}

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }
}

