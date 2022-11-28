import {
  Component, ElementRef,
  Input, QueryList, ViewChild, ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from "@angular/animations";

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
        <app-button id="prev" (click)="prev(index)" classToAdd="btn_slider btn_slider-prev">Prev</app-button>
        <app-button id="next" (click)="next(index)" classToAdd="btn_slider btn_slider-next">Next</app-button>
      </div>
    </section>
  `
})

export class MyWorkSliderComponent {
  @Input() timing = '250ms ease-in';
  counter = 1;
  @ViewChild('workSlider') workSlider: ElementRef | undefined;
  slides: any [] = new Array(5).fill({id: -1, src: '', alt: ''});
  private player: AnimationPlayer | undefined;
  public index = this.slides.findIndex(slide => slide.src === slide.src);

  constructor(private builder: AnimationBuilder) {
  }

  ngOnInit() {
    this.slides = [
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
  }

  private buildAnimation(translateX: number | undefined) {
    return this.builder.build([
      animate(this.timing, style({transform: `translateX(-${translateX}px)`}))
    ]);
  }

  prev(index: number) {
    if (this.index <= 5 && this.index !== 0) {
      this.index--;
    }
    //console.log(this.slides[0].elementRef.nativeElement.clientWidth);
    //console.log(this.workSlider?.nativeElement?.children[0].clientWidth);
    //console.log(this.workSlider?.nativeElement.clientWidth);
    console.log(this.index);
    let wrapperWidth = this.workSlider?.nativeElement.clientWidth;
    let translateX = wrapperWidth * this.index;
    console.log(translateX);
    console.log(wrapperWidth);
    let myAnimation: AnimationFactory = this.buildAnimation(translateX);
    this.player = myAnimation.create(this.workSlider?.nativeElement);
    this.player.play();
  }

  next(index: number) {
    if (this.index >= 0 && this.index < 5) {
       this.index++;
    }
    let wrapperWidth = this.workSlider?.nativeElement.clientWidth * this.index;
    console.log(wrapperWidth);
    console.log(this.index);
    let myAnimation: AnimationFactory = this.buildAnimation(wrapperWidth);
    this.player = myAnimation.create(this.workSlider?.nativeElement);
    this.player.play();
  }
}
