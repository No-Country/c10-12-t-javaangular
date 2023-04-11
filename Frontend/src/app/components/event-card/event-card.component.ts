import { Component } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
faLocation=faLocationDot;
}
