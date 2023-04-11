import { Component } from '@angular/core';
import { faHouse,faCalendarDays,faComments,faHeart,faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  faHouse=faHouse;
  faCalendari=faCalendarDays;
  faComent=faComments;
  faHeart=faHeart;
  faMessage=faMessage;

}
