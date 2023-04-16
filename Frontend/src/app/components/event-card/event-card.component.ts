import { Component, Input } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { DetailsEventComponent } from '../details-event/details-event.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  
  @Input() Events:any;


faLocation=faLocationDot;
  constructor(private dialog:MatDialog) {}

openDetailsEvents() {
  const dialogRef = this.dialog.open(DetailsEventComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}

}