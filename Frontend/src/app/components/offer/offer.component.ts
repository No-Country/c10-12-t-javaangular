import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  newOffer: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService
  ) {

  }

  ngOnInit() {
    this.newOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: [0, Validators.required],
        descripcion: ['', Validators.required],
        telefono: [0, Validators.required],
        fecha: [new Date()]
      }
    )
    console.log('newOffer', this.newOffer.value)
  }



  createOffer() {
    if (this.newOffer.valid) {
      this.jobsService.createOffer(this.newOffer.getRawValue());
    }
  }

}
