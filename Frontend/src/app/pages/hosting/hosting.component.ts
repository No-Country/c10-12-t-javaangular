import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { AlojamientoService } from 'src/app/services/alojamiento.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CouchsurfingCreateComponent } from 'src/app/components/couchsurfing-create/couchsurfing-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  faPlus = faPlus;
  faHouse = faHouse;

  alojamientoList: any = [];

  constructor(
    private alojamientoService: AlojamientoService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.alojamientoService.getAlojamientosObservable().subscribe({
      next: (data) => {
        this.alojamientoList = data;
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CouchsurfingCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

}
