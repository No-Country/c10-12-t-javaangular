import { Component } from '@angular/core';
import { Offer } from 'src/app/models/offers.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  offers: Offer[] = [{
    cargo: '',
    ubicacion: '',
    sueldo: 0,
    descripcion: '',
    telefono: 0,
    logo: ''
  }];

  newOffer: Offer = {
    cargo: '',
    ubicacion: '',
    sueldo: 0,
    descripcion: '',
    telefono: 0,
    logo: ''
  }


  createOffer() {
    this.offers.push(this.newOffer);
  }

}
