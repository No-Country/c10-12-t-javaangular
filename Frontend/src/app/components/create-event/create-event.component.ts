import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offer } from 'src/app/models/offers.model';
import { faInfo,faLocationDot,faCalendarDays,faClock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  faClock=faClock;
  faUbication=faLocationDot;
  faCalendari=faCalendarDays;

  newEvent: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    let id=this.auth.idUsuarios();
    this.newEvent = this.fb.group(
      {
        user_id: [id,''],
        titulo: ['', Validators.required],
        fecha: ['', Validators.required],
        hora: [0, Validators.required],
        ubicacion: ['', Validators.required],
        descripcion: [0, Validators.required],
        asistentes: [0, Validators.required],
      }
    )
  }

  createEvent() {
    if (this.newEvent.valid) {
     const user_id = this.auth.idUsuarios();
      console.log(this.newEvent.getRawValue());
     /*       this.newEvent.patchValue({user_id: user_id});*/
      this.eventsService.createEvent(this.newEvent.getRawValue()) 
    }
  }

}
