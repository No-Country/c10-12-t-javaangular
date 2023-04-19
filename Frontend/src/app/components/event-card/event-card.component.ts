import { Component, Input } from '@angular/core';
import { faEllipsisVertical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { DetailsEventComponent } from '../details-event/details-event.component';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(private dialog:MatDialog) {}

openDetailsEvents() {
  const dialogRef = this.dialog.open(DetailsEventComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}
editDeleteToggle() {
  this.editDeleteControls = !this.editDeleteControls;
}


}