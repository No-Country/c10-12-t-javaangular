import { Component, Input } from '@angular/core';
import { faHouse, faCalendarDays, faComments, faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-forum-card',
  templateUrl: './forum-card.component.html',
  styleUrls: ['./forum-card.component.css']
})
export class ForumCardComponent {
  faHouse = faHouse;
  faCalendari = faCalendarDays;
  faComent = faComments;
  faHeart = faHeart;
  faMessage = faMessage;
@Input() forums:any;
}
