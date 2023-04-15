import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OfferComponent } from '../offer/offer.component';
import { Observable, of } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {
  meOffert=[];
  offers = [
    {
      'cargo': 'Asistente',
      'fecha': '02/05/2023',
      'ubicacion': 'Buenos Aires',
      'sueldo': '300',
      'descripcion': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
    },
    {
      'title': 'Asistente',
      'date': '02/05/2023',
      'location': 'Buenos Aires',
      'salary': '300',
      'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
    },
    {
      'title': 'Asistente',
      'date': '02/05/2023',
      'location': 'Buenos Aires',
      'salary': '300',
      'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
    },
  ]

  faPlus = faPlus;
/*   offers: any[] = []; */
  trabajos:any[]=[];
  trabajos_filter:any[]=[];
  id_user_log:any;

  offers$: Observable<any[]> = this.jobsService.offers$;

  constructor(public dialog: MatDialog, private jobsService: JobsService,private apiSer:ApiService,private auth:AuthService) {
    this.id_user_log=this.auth.idUsuarios();
    this.apiSer.getAllJobs().subscribe(res=>{this.trabajos=res});


    /*
    if(this.auth.idUsuarios()){
          console.log(this.auth.idUsuarios());
    console.log(this.trabajos['user_id']);

    } */


  }
  compareId(){
    this.trabajos=this.trabajos.filter(a=>a.user_id==this.auth.idUsuarios())
    console.log(this.trabajos_filter);
  }

  mostrarAntiguedad = false;
  mostrarAplicadas = false;

  toggleAntiguedad() {
    this.mostrarAntiguedad = !this.mostrarAntiguedad;
    this.mostrarAplicadas = false;
  }
  togglePortales() {
    this.mostrarAplicadas = !this.mostrarAplicadas;
    this.mostrarAntiguedad = false;
  }

  ngOnInit(): void {
    this.jobsService.getAllOffers();
    this.offers$ = this.jobsService.offers$;
  }

  filtrarRecientes() {
    this.offers$.subscribe(
      data => {
        const datosFiltrados = data.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
        this.offers$ = of(datosFiltrados);
        console.log(this.offers);
      }
    )
  }

  filtrarAntiguas() {
    this.offers$.subscribe(
      data => {
        const datosFiltrados = data.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
        this.offers$ = of(datosFiltrados);
        console.log(this.offers);
      }
    )
  }



  openDialog() {
    const dialogRef = this.dialog.open(OfferComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
