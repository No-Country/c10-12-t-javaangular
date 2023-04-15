import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offer } from 'src/app/models/offers.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
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
