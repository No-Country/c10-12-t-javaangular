import { Component } from '@angular/core';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-couchsurfing-card',
  templateUrl: './couchsurfing-card.component.html',
  styleUrls: ['./couchsurfing-card.component.css']
})
export class CouchsurfingCardComponent {

  faLocationDot = faLocationDot;

}

