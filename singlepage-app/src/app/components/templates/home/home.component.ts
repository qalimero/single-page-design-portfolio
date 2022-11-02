import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent  {
  private btnHeaderFooterBtn = false;
  imgCollection = [
    {
      image: '../assets/images/image-slide-1.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-2.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-3.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-4.jpg',
      alt: ""
    },
    {
      image: '../assets/images/image-slide-5.jpg',
      alt: ""
    }
  ]
}
