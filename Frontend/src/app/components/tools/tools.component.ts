import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  tools: any = [
    {
      'img': '../../../assets/img/currency.png',
      'titulo': 'Convertidor de moneda',
      'descripcion': 'Hacé el cambio de ARS a tu moneda. ¡En un instante!',
      'url': 'https://www.xe.com/es/currencyconverter/convert/?Amount=1&From=ARS&To=USD',
      'buttonText': 'Converti tu moneda'
    },
    {
      'img': '../../../assets/img/translate.png',
      'titulo': 'Traductor',
      'descripcion': 'Te proporcionamos un traductor para mejorar tu experiencia.',
      'url': 'https://translate.google.com.ar/?sl=es&tl=en&op=translate',
      'buttonText': 'Traduci tus textos'
    },
  ]

}
