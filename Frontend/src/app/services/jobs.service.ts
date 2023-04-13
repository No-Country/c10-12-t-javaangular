import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  offers: any = [];
  offers$!: Observable<any[]>;

  userOffers: any = [];
  appliedOffers: any = [];
  
  constructor() { }

  getAllOffers(): void {
    this.offers$ = of(this.offers);
  }

  getUserOffers() {

  }

  getAppliedOffers() {

  }

  createOffer(newOffer: any) {
    this.offers.push(newOffer);
    this.userOffers.push(newOffer);
    this.offers$ = of(this.offers);
  }

}
