import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { AlojamientoService } from 'src/app/services/alojamiento.service';

@Component({
  selector: 'app-couchsurfing-update',
  templateUrl: './couchsurfing-update.component.html',
  styleUrls: ['./couchsurfing-update.component.css']
})
export class CouchsurfingUpdateComponent implements OnInit {

  faPen = faPen;

  couchsurfing: any;
  editedCouchsurfing: FormGroup = new FormGroup({});

  constructor(
    private alojamientoService: AlojamientoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editedCouchsurfing = this.formBuilder.group({
      titulo: ['', Validators.required],
      ubicacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      email: ['', Validators.required],
      telefono: [0, Validators.required],
    });
    this.alojamientoService.getById().subscribe({
      next: (data: any) => {
        this.couchsurfing = data[0];
        this.setForm();
      }
    });    
  }

  setForm() {
    this.editedCouchsurfing.patchValue({
      titulo: this.couchsurfing.titulo,
      ubicacion: this.couchsurfing.ubicacion,
      descripcion: this.couchsurfing.descripcion,
      email: this.couchsurfing.email,
      telefono: this.couchsurfing.telefono,
    });
  }

  updateCouchsurfing() {
    if (this.editedCouchsurfing.valid) {
      this.alojamientoService.updateCouchsurfing(this.editedCouchsurfing.getRawValue()); 
    }
  }

}
