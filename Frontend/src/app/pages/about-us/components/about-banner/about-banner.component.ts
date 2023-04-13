import { Component } from '@angular/core';
import { faCircleCheck, faDatabase, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about-banner',
  templateUrl: './about-banner.component.html',
  styleUrls: ['./about-banner.component.css']
})
export class AboutBannerComponent {

  faCircleCheck = faCircleCheck;
  faDatabase = faDatabase;
  faPaintBrush = faPaintBrush;

}
