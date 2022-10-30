import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {MyWorkSliderItemDirective} from "./my-work-slider-item.directive";

@Directive({
  selector: '.app-my-work-slider-item'
})
export class MyWorkSliderItemElement {
}
@Component({
  selector: 'app-my-work-slider',
  templateUrl: './my-work-slider.component.html',
  styleUrls: ['./my-work-slider.component.scss'],
})

export class MyWorkSliderComponent implements OnInit, AfterViewInit {
  @ContentChildren(MyWorkSliderItemDirective) items: QueryList<MyWorkSliderItemDirective> | undefined;
  @ViewChildren(MyWorkSliderComponent, {read: ElementRef}) private itemsElements : QueryList<ElementRef> | undefined;
  private itemWidth : number | undefined;
  carouselWrapperStyle = {}

  slide = document.getElementById('slide');
  prev = document.getElementById('prev');
  next = document.getElementById('next');

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

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements?.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    }
  }
}
