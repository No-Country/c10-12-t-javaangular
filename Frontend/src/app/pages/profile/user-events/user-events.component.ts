import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {
  
  userEvents: any | undefined;

  constructor(
    private eventsService: EventsService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.eventsService.getUserEventsObservable().subscribe({
      next: (data) => {
        this.userEvents = data;
      }
    });
  }

  openDialog() {
    const dialogRef = this.matDialog.open(CreateEventComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
