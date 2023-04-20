import { Component, Input } from '@angular/core';
import { faEllipsisVertical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { DetailsEventComponent } from '../details-event/details-event.component';
import { MatDialog } from '@angular/material/dialog';
import { EventEditComponent } from '../event-edit/event-edit.component';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  isUserOffer: boolean = true;
  editDeleteControls: boolean = false;
  @Input() Events:any;
  faEllipsisVertical = faEllipsisVertical;

faLocation=faLocationDot;
  constructor(private dialog:MatDialog,private eventServi:EventsService) {}


  

openDetailsEvents() {
  const dialogRef = this.dialog.open(DetailsEventComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}

openEditEvents(){
  this.eventServi.idForEditDelete=this.Events.id;
  const dialogRef=this.dialog.open(EventEditComponent);
  dialogRef.afterClosed().subscribe((resul:any)=>{
    console.log(`Dialog result: ${resul}`)
  })


}
editDeleteToggle() {
  this.editDeleteControls = !this.editDeleteControls;
}

deleteEvent(){
  this.eventServi.idForEditDelete=this.Events.id;
  this.eventServi.deleteEvent();
}

}