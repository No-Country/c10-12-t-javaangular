import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent {

  newEvent: FormGroup = new FormGroup({});
  editedEvento: FormGroup = new FormGroup({});
  id: number | undefined;
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
        descripcion: ['', Validators.required]
      }
    )
    this.byId(this.id);
    console.log('id de evento', )
  }
    byId(id:any){
      let n :any;
      this.eventsService.findByIdEvent().subscribe({
        next:(data:any)=>{
          console.log('desde byId',data)
          n=data[0];
          this.newEvent.patchValue({
            titulo: n.titulo,
            fecha: n.fecha ,
            hora:n.hora,
            ubicacion: n.ubicacion,
            descripcion:n.descripcion 
          });
        }
      })
    }

  editEvent(){
    if(this.newEvent.valid){
      this.eventsService.editEvent(this.newEvent.getRawValue())
    }
  }
}
