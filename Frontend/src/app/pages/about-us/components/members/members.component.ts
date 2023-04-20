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
      'quote': '"Se hoy tu mejor versión que tu futuro esté orgulloso mañana."'
    },
    {
      'name': 'Diego A. Muñoz',
      'role': 'Team Leader',
      'img': '../../../../../assets/img/team-members/diego.png',
      'linkedin': '',
      'quote': '"Me motiva la idea de que mi trabajo pueda tener un impacto significativo en la vida de muchas personas."'
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
      'quote': '"Primero las personas, luego el diseño."',
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
