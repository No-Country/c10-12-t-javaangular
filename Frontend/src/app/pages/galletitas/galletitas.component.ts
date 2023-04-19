import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galletitas',
  templateUrl: './galletitas.component.html',
  styleUrls: ['./galletitas.component.css']
})
export class GalletitasComponent  implements OnInit {

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
