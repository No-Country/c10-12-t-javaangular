import { Component } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';
import { faCookieBite, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent {

  faCookieBite = faCookieBite;
  faAngleRight = faAngleRight;

  constructor(private cookiesService: CookiesService) {}

  setCookiesConfig() {
    this.cookiesService.setCookiesConfig();
  }

}
