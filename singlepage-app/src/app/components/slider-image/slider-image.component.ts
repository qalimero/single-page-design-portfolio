import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss']
})
export class SliderImageComponent implements OnInit {

  imageObject: Array<object> = [{
    image: '../assets/images/image-slide-3.jpg',
    thumbImage: '../assets/images/image-slide-3.jpg',
    alt: 'print journal',
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
    {
      image: '../assets/images/image-slide-2.jpg',
      thumbImage: '../assets/images/image-slide-2.jpg',
      alt: 'print journal',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
