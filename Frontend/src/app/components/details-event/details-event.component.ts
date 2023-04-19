import { Component } from '@angular/core';
import { faInfo,faLocationDot,faCalendarDays,faClock } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent {
  titularAlerta: string = '';
faInfo=faInfo;
faLocation=faLocationDot;
faCalendari=faCalendarDays;
faClock=faClock;






  confirmar(){

      Swal.fire('Asistencia Confirmada', this.titularAlerta, 'success');
 
    
  }

}
