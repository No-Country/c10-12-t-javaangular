import { Component } from '@angular/core';
import { faSquareCheck, faHouseChimney, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  faSquareCheck = faSquareCheck;
  faHouseChimney = faHouseChimney;
  faHandHoldingHeart = faHandHoldingHeart;

}
