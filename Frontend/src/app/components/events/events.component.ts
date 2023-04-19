import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Offer } from 'src/app/models/offers.model';
import { OfferComponent } from '../offer/offer.component';
import { CreateEventComponent } from '../create-event/create-event.component';
import { EventsService } from 'src/app/services/events.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  Events = [];
  newEvent: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private eventsService: EventsService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.getEvents();
    this.eventsService.getEvents()
    .subscribe(data => {
      console.log('desde events component', data)
      this.Events = data;
    });

  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getEvents() {
    this.eventsService.getAllEvents();
  }
}
