import { Component } from '@angular/core';
import { faHouse,faCalendarDays,faComments,faHeart,faMessage } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent {

  isForo:boolean=false;
  isEvents:boolean=true;

  faHouse=faHouse;
  faCalendari=faCalendarDays;
  faComent=faComments;
  faHeart=faHeart;
  faMessage=faMessage;


  ShowForum(){

    this.isForo=true;
    this.isEvents=false;
  }

  ShowEvents(){
    this.isForo=false;
    this.isEvents=true;
  }



}

