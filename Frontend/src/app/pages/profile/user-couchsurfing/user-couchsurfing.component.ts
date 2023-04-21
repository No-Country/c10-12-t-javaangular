import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouchsurfingCreateComponent } from 'src/app/components/couchsurfing-create/couchsurfing-create.component';
import { AlojamientoService } from 'src/app/services/alojamiento.service';

@Component({
  selector: 'app-user-couchsurfing',
  templateUrl: './user-couchsurfing.component.html',
  styleUrls: ['./user-couchsurfing.component.css']
})
export class UserCouchsurfingComponent implements OnInit {
  
  userCouchsurfing: any | undefined;

  constructor(
    private alojamiento: AlojamientoService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.alojamiento.getUserCouchsurfingObservable().subscribe({
      next: (data) => {
        this.userCouchsurfing = data;
      }
    });
  }

  openDialog() {
    const dialogRef = this.matDialog.open(CouchsurfingCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }

}
