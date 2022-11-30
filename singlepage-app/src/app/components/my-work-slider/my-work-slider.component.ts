import {
  Component, NgModule,
  ViewEncapsulation
} from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';

@NgModule({
  imports: [SwiperModule],
})

@Component({
  selector: 'app-my-work-slider',
  exportAs: 'slider',
  styleUrls: ['./my-work-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,

  template: `
    <section class="my-work-slider">
      <div class="my-work-slider_wrapper" #workSlider>
        <ng-container *ngFor="let slide of slides; index as i">
          <img [alt]="slide.alt" class="my-work-slider_wrapper_item"
               [src]="slide.src">
        </ng-container>
      </div>
      <div class="my-work-slider_controls">
        <app-button id="prev" classToAdd="btn_slider btn_slider-prev">Prev</app-button>
        <app-button id="next" classToAdd="btn_slider btn_slider-next">Next</app-button>
      </div>
    </section>
  `
})

export class MyWorkSliderComponent {

  slides = [
    {
      src: '../assets/images/image-slide-1.jpg',
      alt: ""
    },
    {
      src: '../assets/images/image-slide-2.jpg',
      alt: ""
    },
    {
      src: '../assets/images/image-slide-3.jpg',
      alt: ""
    },
    {
      src: '../assets/images/image-slide-4.jpg',
      alt: ""
    },
    {
      src: '../assets/images/image-slide-5.jpg',
      alt: ""
    }
  ]

  constructor() {}

}
