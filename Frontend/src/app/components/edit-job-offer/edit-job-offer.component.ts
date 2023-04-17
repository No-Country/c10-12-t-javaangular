import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-edit-job-offer',
  templateUrl: './edit-job-offer.component.html',
  styleUrls: ['./edit-job-offer.component.css']
})
export class EditJobOfferComponent {

  @Input() offers:any; 
  editedOffer: FormGroup = new FormGroup({});
  id: number | undefined;

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService
  ) {
   
  }

  ngOnInit() {
    this.id = this.jobsService.editOfferId;
    this.editedOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: ['', Validators.required],
        descripcion: ['', Validators.required],
        telefono: ['', Validators.required],
        status: ['', Validators.required],
        name: ['', Validators.required],
      }
    )
    this.byId(this.id);
  }

  editOffer() {
    if (this.id) {
      this.jobsService.updateJob(this.editedOffer.getRawValue(), this.id);
    }
  } 

  byId(id:any){
    let n:any;
    
    this.jobsService.findByIdJob(id).subscribe({
      next: (data: any) => {
        n = data[0];
        this.editedOffer.patchValue({
          cargo: n.cargo,
          ubicacion: n.ubicacion,
          sueldo: n.sueldo,
          descripcion: n.descripcion,
          telefono: n.telefono,
          status: n.status,
          name: n.name
        });
      }
    })
  }
}
