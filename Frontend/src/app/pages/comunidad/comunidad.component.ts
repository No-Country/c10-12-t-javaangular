import { Component } from '@angular/core';
import { faHouse,faCalendarDays,faComments,faHeart,faMessage } from '@fortawesome/free-solid-svg-icons';
import {RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent {

  isForo:boolean=true;
  isEvents:boolean=false;

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

