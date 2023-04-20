import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  pmtl: any[] = [
    {
      'name': 'Juan Pablo Gil Jota',
      'role': 'Project Manager',
      'img': '../../../../../assets/img/team-members/juan-pablo.png',
      'linkedin': '',
      'quote': '"Amo codear desde que tengo 7 años. Me encanta trabajar de lo que amo."'
    },
    {
      'name': 'Diego A. Muñoz',
      'role': 'Team Leader',
      'img': '../../../../../assets/img/team-members/diego.png',
      'linkedin': ''
    },
  ]

  frontend: any[] = [
    {
      'name': 'Elcira Ibarra',
      'role': 'Frontend Dev',
      'img': '../../../../../assets/img/team-members/elcira.png',
      'linkedin': '',
      'quote': '"Disfruto programando y colaborando con personas talentosas."',
    },
    {
      'name': 'Federico Burgos',
      'role': 'Frontend Dev',
      'img': '../../../../../assets/img/team-members/federico.png',
      'linkedin': '',
      'quote': '"Soy un amante del arte de la maquetación frontend, disfruto creando interfaces interactivas y dinámicas."',
    },
    {
      'name': 'Fernando Weisheim',
      'role': 'Frontend Dev',
      'img': '../../../../../assets/img/team-members/fernando.png',
      'linkedin': '',
      'quote': '"Estoy encontrando una pasion en la maquetacion, me encanta que se vea bonita la interface"',
    },
  ];

  design: any[] = [
    {
      'name': 'Celina Owen',
      'role': 'Diseñadora UX/UI',
      'img': '../../../../../assets/img/team-members/celina.png',
      'linkedin': '',
      'quote': '"Poder transformar ideas en historias visuales, denota mi amor por el diseño digital."',
    },
    {
      'name': 'Luis Vasquez',
      'role': 'Diseñadora UX/UI',
      'img': '../../../../../assets/img/team-members/luis.png',
      'linkedin': '',
      'quote': '"Amo codear desde que tengo 7 años. Me encanta trabajar de lo que amo."',
    },
    {
      'name': 'Paula Gareis',
      'role': 'Diseñadora UX/UI',
      'img': '../../../../../assets/img/team-members/paula.png',
      'linkedin': '',
      'quote': '"Disfruto crear experiencias digitales minimalistas que faciliten la vida de las personas."',
    },
  ];



}
