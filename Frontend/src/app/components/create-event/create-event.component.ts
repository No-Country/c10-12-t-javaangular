import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offer } from 'src/app/models/offers.model';
import { faInfo,faLocationDot,faCalendarDays,faClock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  faClock=faClock;
  faUbication=faLocationDot;
  faCalendari=faCalendarDays;

  newOffer: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder
  ) {

  }

  offers: Offer[] = [];

  ngOnInit() {
    this.newOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: [0, Validators.required],
        descripcion: ['', Validators.required],
        telefono: [0, Validators.required],
        logo: ['', Validators.required],
      }
    )
    console.log('newOffer', this.newOffer.value)
  }



  createOffer() {
    if (this.newOffer.valid) {
      this.offers.push(this.newOffer.getRawValue());
      console.log('offers',this.offers)
    }
  }

}
