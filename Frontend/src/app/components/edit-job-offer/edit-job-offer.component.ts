import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-edit-job-offer',
  templateUrl: './edit-job-offer.component.html',
  styleUrls: ['./edit-job-offer.component.css']
})
export class EditJobOfferComponent {

  editedOffer: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService
  ) {

  }

  ngOnInit() {
    this.editedOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: [0, Validators.required],
        descripcion: ['', Validators.required],
        telefono: [0, Validators.required],
        fecha: [new Date()]
      }
    )
    console.log('editedOffer', this.editedOffer.value)
  }



  editOffer() {
    if (this.editedOffer.valid) {
      this.jobsService.editOffer(this.editedOffer.getRawValue());
    }
  }

}
