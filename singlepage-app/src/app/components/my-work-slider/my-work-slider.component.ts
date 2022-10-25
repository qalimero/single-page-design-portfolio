import {Component} from '@angular/core';


@Component({
  selector: 'app-my-work-slider',
  templateUrl: './my-work-slider.component.html',
  styleUrls: ['./my-work-slider.component.scss'],

})
export class MyWorkSliderComponent  {
  imgCollection = [
    {
      id: 1,
      image: '../assets/images/image-slide-1.jpg',
      thumbImage: '../assets/images/image-slide-1.jpg',
      alt: ""
    },
    {
      id: 2,
      image: '../assets/images/image-slide-2.jpg',
      thumbImage: '../assets/images/image-slide-2.jpg',
      alt: ""
    },
    {
      id: 3,
      image: '../assets/images/image-slide-3.jpg',
      thumbImage: '../assets/images/image-slide-3.jpg',
      alt: ""
    },
    {
      id: 4,
      image: '../assets/images/image-slide-4.jpg',
      thumbImage: '../assets/images/image-slide-4.jpg',
      alt: ""
    },
    {
      id: 5,
      image: '../assets/images/image-slide-5.jpg',
      thumbImage: '../assets/images/image-slide-5.jpg',
      alt: ""
    }
  ]

  constructor() {}
}
