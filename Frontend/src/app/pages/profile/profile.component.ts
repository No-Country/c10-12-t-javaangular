import { Component } from '@angular/core';
import { faLocationDot,faPhone,faHashtag,faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  hidde=true;

  mostrar(){

    this.hidde=!this.hidde;
  }
  faFlech=faEye;
  faLocation=faLocationDot;
  faPhone=faPhone;
  faHashtag=faHashtag;
}
