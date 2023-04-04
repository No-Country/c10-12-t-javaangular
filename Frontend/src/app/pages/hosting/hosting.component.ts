import { Component, OnInit } from '@angular/core';
import { faHouse, faHotel, faBed, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  hotels: boolean = false;
  couchsurfing: boolean = true;
  rental: boolean = false;

  faHouse = faHouse;
  faHotel = faHotel;
  faBed = faBed;
  faKey = faKey;

  ngOnInit(): void {

  }

  setHotelsVisibility() {
    this.hotels = true;
    this.couchsurfing = false;
    this.rental = false;
  }

  setCouchsurfingVisibility() {
    this.couchsurfing = true;
    this.hotels = false;
    this.rental = false;
  }

  setRentalVisibility() {
    this.rental = true;
    this.hotels = false;
    this.couchsurfing = false;
  }

}
