import {
  AfterViewInit,
  Component, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import SwiperCore, {Keyboard, Mousewheel, Navigation, SwiperOptions} from 'swiper';
import {SwiperComponent} from "swiper/angular";

SwiperCore.use([Navigation, Mousewheel, Keyboard]);
@Component({
  selector: 'app-my-work-slider',
  template: `
    <swiper [config]="config" class="my-work-slider swiper mySwiper">
      <ng-template swiperSlide  *ngFor="let slide of slides">
        <img [alt]="slide.alt" class="my-work-slider_wrapper_item"
             [src]="slide.src">
      </ng-template>
    </swiper>
    <div class="my-work-slider_controls">
      <app-button id="prev" (click)="swipePrev()" classToAdd="btn_slider btn_slider-prev">Prev</app-button>
      <app-button id="next" (click)="swipeNext()" classToAdd="btn_slider btn_slider-next">Next</app-button>
    </div>
  `,
  styleUrls: ['./my-work-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MyWorkSliderComponent {
  @ViewChild(SwiperComponent) swiper: SwiperComponent | undefined;
  config: SwiperOptions = {
    speed: 500,
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: true,
    keyboard: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 16,
      },
      // when window width is >= 480px
      768: {
        spaceBetween: 30
      },
    }
  }
  slides = [
    {
      src: '../assets/images/image-slide-1.jpg',
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

  constructor() {
  }
  swipePrev() {
    this.swiper?.swiperRef.slidePrev();
  }

  swipeNext() {
    this.swiper?.swiperRef.slideNext();
  }
}
