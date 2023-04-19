import { Component, Input } from '@angular/core';
import { faLocationDot, faEllipsisVertical, faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { AlojamientoService } from 'src/app/services/alojamiento.service';

@Component({
  selector: 'app-couchsurfing-card',
  templateUrl: './couchsurfing-card.component.html',
  styleUrls: ['./couchsurfing-card.component.css']
})
export class CouchsurfingCardComponent {
  
   href:string=`https://api.whatsapp.com/send?phone=&text=Hola%20,te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal.`
  @Input() hosting!: any;


  faLocationDot = faLocationDot;
  faEllipsisVertical = faEllipsisVertical;
  faPen = faPen;
  faCircleXmark = faCircleXmark;

  isUserPost: boolean = true;
  editDeleteControls: boolean = false;
  
  constructor(private alojamiento:AlojamientoService){
    
  }
  openDialog() {
  }
  
  deleteOffer() {
  }

  editDeleteToggle() {
    console.log('asd')
    this.editDeleteControls = !this.editDeleteControls
  }


  ngOnInit() {

 /*    this.getAlojamiento()
     this.alojamiento.getalojamientos().subscribe(
       res=>{this.alojamientoList=res}
       )
       console.log(this.alojamientoList);
   }
 
   getAlojamiento(){
     this.alojamiento.getalojamientos()
   }
  */

  }}

