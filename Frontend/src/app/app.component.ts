import { Component, OnInit } from '@angular/core';
import { CookiesService } from './services/cookies.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-cookies *ngIf="!cookiesAccepted" class="fixed z-10 bottom-0 left-0 right-0"></app-cookies>
  `,
})
export class AppComponent implements OnInit {
  
  title = 'Frontend';
  cookiesAccepted: boolean | undefined;

  constructor(
    private cookiesService: CookiesService
  ) {}

  ngOnInit(): void {    
    this.cookiesService.getCookiesConfig().subscribe( value => {
      this.cookiesAccepted = value;
    });
  }

}
