import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from 'src/app/services/alojamiento.service';

@Component({
  selector: 'app-couchsurfing-delete',
  templateUrl: './couchsurfing-delete.component.html',
  styleUrls: ['./couchsurfing-delete.component.css']
})
export class CouchsurfingDeleteComponent implements OnInit {  

  constructor(
    private alojamientoService: AlojamientoService
  ) {}

  ngOnInit(): void {
    
  }

  deleteCouchsurfing() {
    
  }

}
