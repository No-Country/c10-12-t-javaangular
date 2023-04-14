import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  // user$ = this.auth.authState$.pipe(
  //   filter(state => state ? true : false)
  // );

  constructor(
    private auth: AuthService,
  ) { }

}
