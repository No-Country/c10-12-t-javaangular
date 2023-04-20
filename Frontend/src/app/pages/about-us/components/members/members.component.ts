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
      'quote': '"Se hoy tu mejor versión que tu futuro esté orgulloso mañana."',
      social: [
        {
          'url': 'https://www.linkedin.com/in/juan-pablo-gil-jota-3ab249119',
          'icon': 'bi bi-linkedin',          
        }
      ],
    },

    {
      'name': 'Diego A. Muñoz',
      'role': 'Team Leader',
      'img': '../../../../../assets/img/team-members/diego.png',
      'linkedin': '',
      'quote': '"Me motiva la idea de que mi trabajo pueda tener un impacto significativo en la vida de muchas personas."',
      social: [  
        {
          'url': 'https://www.linkedin.com/in/diandres/',
          'icon': 'bi bi-linkedin',
        },
        {
          'url': 'https://www.facebook.com/diegoandres.munozvasquez',
          'icon': 'bi bi-facebook',
        }
      ],
    },

  ]

  frontend: any[] = [

    {
      'name': 'Elcira Ibarra',
      'role': 'Frontend Dev',
      'img': '../../../../../assets/img/team-members/elcira.png',
      'quote': '"Disfruto programando y colaborando con personas talentosas."',
      social: [
        {
          'url': 'https://www.linkedin.com/in/elcicode/',
          'icon': 'bi bi-linkedin',
        },
        {
          'url': 'https://github.com/elcicode',
          'icon': 'bi bi-github',
        }
      ],
      
    },


    {
      'name': 'Federico Burgos',
      'role': 'Frontend Dev',
      'img': '../../../../../assets/img/team-members/federico.png',
      'linkedin': '',
      'quote': '"Soy un amante del arte de la maquetación frontend, disfruto creando interfaces interactivas y dinámicas."',
      social: [
        {
          'url': 'https://www.linkedin.com/in/federicoburgos/',
          'icon': 'bi bi-linkedin',
        },
        {
          'url': 'https://github.com/fedev95',
          'icon': 'bi bi-github',
        }
      ],
    },

    {
      'name': 'Fernando Weisheim',
      'role': 'Frontend Dev',
      'img': '../../../../../assets/img/team-members/fernando.png',
      'linkedin': '',
      'quote': '"Estoy encontrando una pasión en la maquetación, me encanta que se vea bonita la interface."',
      social: [
        {
          'url': 'https://www.linkedin.com/in/fernandoweisheim/',
          'icon': 'bi bi-linkedin',
        },
        {
          'url': 'https://github.com/FerWeisheim',
          'icon': 'bi bi-github',
        }
      ],
    },

  ];

  design: any[] = [
    {
      'name': 'Celina Owen',
      'role': 'Diseñadora UX/UI',
      'img': '../../../../../assets/img/team-members/celina.png',
      'linkedin': '',
      'quote': '"Poder transformar ideas en historias visuales, denota mi amor por el diseño digital."',
      social: [
        {
          'url': 'https://www.behance.net/celinaowen/',
          'icon': 'bi bi-behance',
        },
        {
          'url': 'https://www.linkedin.com/in/celina-owen/',
          'icon': 'bi bi-linkedin',
        },
        {
          'url': 'https://www.youtube.com/@celinaowen',
          'icon': 'bi bi-youtube',
        }
      ],
    },

    {
      'name': 'Luis Vasquez',
      'role': 'Diseñadora UX/UI',
      'img': '../../../../../assets/img/team-members/luis.png',
      'linkedin': '',
      'quote': '"Primero las personas, luego el diseño."',
      social: [
        {
          'url': 'https://www.linkedin.com/in/luis-vasquez-ui/',
          'icon': 'bi bi-linkedin',
        },
      ],
    },

    {
      'name': 'Paula Gareis',
      'role': 'Diseñadora UX/UI',
      'img': '../../../../../assets/img/team-members/paula.png',
      'linkedin': '',
      'quote': '"Disfruto crear experiencias digitales minimalistas que faciliten la vida de las personas."',
      social: [
        {
          'url': 'https://www.behance.net/paugareis',
          'icon': 'bi bi-behance',
        },
        {
          'url': 'https://www.linkedin.com/in/pauladanielagareis/',
          'icon': 'bi bi-linkedin',
        },
        {
          'url': 'https://dribbble.com/PaulaDGareis',
          'icon': 'bi bi-dribbble',
        }
      ],
    },

  ];
}
