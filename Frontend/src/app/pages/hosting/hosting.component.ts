import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { AlojamientoService } from 'src/app/services/alojamiento.service';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  faHouse = faHouse;

  /* hostingArray = [
    { 
      'title': 'titulo de item',
      'location': 'Buenos Aires, Argentina',
      'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae provident illo aut rem architecto in delectus voluptatum aliquid quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae provident illo aut rem architecto in delectus voluptatum aliquid quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae provident illo aut rem architecto in delectus voluptatum aliquid quae.'
    },
    {
      'title': 'titulo de item 2',
      'location': 'Buenos Aires, Argentina',
      'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae provident illo aut rem architecto in delectus voluptatum aliquid quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae provident illo aut rem architecto in delectus voluptatum aliquid quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae provident illo aut rem architecto in delectus voluptatum aliquid quae.'
    },
  ]; */
  alojamientoList=[];
  constructor(private alojamiento:AlojamientoService) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.getAlojamiento()
    this.alojamiento.getalojamientos().subscribe(
      res=>{this.alojamientoList=res}
      )
      console.log(this.alojamientoList);
  }

  getAlojamiento(){
    this.alojamiento.getalojamientos()
  }

 


}
