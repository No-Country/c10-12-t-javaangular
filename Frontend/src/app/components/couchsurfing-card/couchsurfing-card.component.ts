import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faLocationDot, faEllipsisVertical, faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { AlojamientoService } from 'src/app/services/alojamiento.service';
import { CouchsurfingUpdateComponent } from '../couchsurfing-update/couchsurfing-update.component';
import { CouchsurfingDeleteComponent } from '../couchsurfing-delete/couchsurfing-delete.component';

@Component({
  selector: 'app-couchsurfing-card',
  templateUrl: './couchsurfing-card.component.html',
  styleUrls: ['./couchsurfing-card.component.css']
})
export class CouchsurfingCardComponent {
  
   href:string=`https://api.whatsapp.com/send?phone=&text=Hola%20,te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal.`;

  @Input() couchsurfing!: any;

  faLocationDot = faLocationDot;
  faEllipsisVertical = faEllipsisVertical;
  faPen = faPen;
  faCircleXmark = faCircleXmark;

  isUserPost: boolean = true;
  editDeleteControls: boolean = false;
  
  constructor(
    private alojamientoService:AlojamientoService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {

  }

  openEditDialog() {
    this.alojamientoService.idForUpdateOrDelete = this.couchsurfing.id;
    const dialogRef = this.matDialog.open(CouchsurfingUpdateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDeleteDialog() {
    this.alojamientoService.idForUpdateOrDelete = this.couchsurfing.id;
    const dialogRef = this.matDialog.open(CouchsurfingDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDeleteToggle() {
    this.editDeleteControls = !this.editDeleteControls;
  }  

}

