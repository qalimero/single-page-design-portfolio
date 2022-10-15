import {Component, ViewChild} from '@angular/core';
import {NgImageSliderComponent} from "ng-image-slider";


@Component({
  selector: 'app-my-work-slider',
  templateUrl: './my-work-slider.component.html',
  styleUrls: ['./my-work-slider.component.scss'],

})
export class MyWorkSliderComponent  {
  @ViewChild('nav') slider: NgImageSliderComponent | undefined;
  imgCollection: Array<object> = [
    {
      image: '../assets/images/image-slide-1.jpg',
      thumbImage: '../assets/images/image-slide-1.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-2.jpg',
      thumbImage: '../assets/images/image-slide-2.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-3.jpg',
      thumbImage: '../assets/images/image-slide-3.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-4.jpg',
      thumbImage: '../assets/images/image-slide-4.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-5.jpg',
      thumbImage: '../assets/images/image-slide-5.jpg',
      alt: ""
    }
  ]

  constructor() {}

  prevImageClick() {
    this.slider?.prev();
  }

  nextImageClick() {
    this.slider?.next();
  }
}
