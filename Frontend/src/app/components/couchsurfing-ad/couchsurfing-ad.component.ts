import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlojamientoService } from 'src/app/services/alojamiento.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-couchsurfing-ad',
  templateUrl: './couchsurfing-ad.component.html',
  styleUrls: ['./couchsurfing-ad.component.css']
})
export class CouchsurfingAdComponent {

  constructor(private alojamiento:AlojamientoService,private auth: AuthService){

  }

  ngOnInit() {

   this.getAlojamiento()
    this.alojamiento.getalojamientos().subscribe(
      res=>{console.log(res)}
    )
  }

  getAlojamiento(){
    this.alojamiento.getalojamientos()
  }

}
