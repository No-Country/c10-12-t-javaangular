import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

import SwiperCore, {Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlidesComponent {

  sliderContent = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 1'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 2'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 3'
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 4'
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 5'
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 6'
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 7'
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 8'
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 9'
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Fecha',
      title: 'Nombre evento 10'
    },
  ]

  config: SwiperOptions = {
      slidesPerView: 1,
      // spaceBetween: 50,
      centeredSlides: true,
      pagination: { clickable: true },
      navigation: true,
      scrollbar: { draggable: true },
      keyboard: { enabled: true }
  };

  config3: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: { clickable: true },
    navigation: true,
    scrollbar: { draggable: true },
    keyboard: { enabled: true }
};


}
