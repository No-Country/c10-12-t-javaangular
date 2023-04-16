import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Offer } from 'src/app/models/offers.model';
import { OfferComponent } from '../offer/offer.component';
import { CreateEventComponent } from '../create-event/create-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  Events = [
    {
      'fecha': "22 de sep 2023",
      'hora':"19:00hs",
      'descripcion':"Gran Encuentro",
      'confirmacion':'5 personas confirmaron',
      'lugar':"jardin botanico"
    },
    {
      'fecha': "05 de oct 2023",
      'hora':"20:00hs",
      'descripcion':"Los pericos",
      'confirmacion':'4 personas confirmaron',
      'lugar':"plaza central"
    },
    {
      'fecha': "24 de dic 2023",
      'hora':"00:00hs",
      'descripcion':"fiesta de navidad",
      'confirmacion':'100 personas confirmaron',
      'lugar':"plaza central"
    },
  ]
  newOffer: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,public dialog: MatDialog
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

  openDialog() {
    const dialogRef = this.dialog.open(CreateEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


    

}
