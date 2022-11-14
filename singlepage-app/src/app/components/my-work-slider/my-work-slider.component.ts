import {
  Component, ElementRef,
  Input, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {AnimationBuilder, AnimationFactory, AnimationPlayer, animate, style} from "@angular/animations";

@Component({
  selector: 'app-my-work-slider',
  exportAs: 'slider',
  styleUrls: ['./my-work-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="my-work-slider" >
      <div class="my-work-slider_wrapper" >
        <ng-container *ngFor="let slide of slides; let i = index">
           <img [alt]="slide.alt" class="my-work-slider_wrapper_item" *ngIf="i === currentSlide"
                [src]="slide.image" #workSlider>
        </ng-container>
      </div>
      <div class="my-work-slider_controls" *ngIf="showControls">
        <app-button id="prev" (click)="prev()" classToAdd="btn_slider btn_slider-prev">Prev</app-button>
        <app-button id="next" (click)="next()" classToAdd="btn_slider btn_slider-next">Next</app-button>
      </div>
    </section>
  `
})

export class MyWorkSliderComponent implements OnInit{
  @ViewChild('workSlider') private slider : ElementRef | undefined;
  @Input() slides : any;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  currentSlide = 0;
  private player: AnimationPlayer | undefined;

  constructor(private builder: AnimationBuilder) {
  }

  ngOnInit() {
      //this.itemWidth = this.itemsElements?.first?.nativeElement?.getBoundingClientRect().width;
      // try to convert the object into a string and into a number

     /* let objWidth = Object.keys(Object.getPrototypeOf(this.itemsElements?.first?.nativeElement?.getBoundingClientRect().width));
      console.log("return number ?",objWidth);
      let elementWidth : number =  +objWidth;
      this.itemWidth = elementWidth;*/

      //console.log("return number ?",this.itemWidth);
      //width: `${this.itemWidth}px`
      //};
      //Console log of carouselWrapperStyle
      //type Object = keyof typeof this.carouselWrapperStyle;
      //const myVar = 'width' as Object;
      //console.log(this.carouselWrapperStyle[myVar]);
  }

  private buildAnimation(offset: number) {
    return this.builder.build([
      animate(this.timing, style({transform: `translateX(-${offset}px)`}))
    ]);
  }


  next() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    const offset = this.slider?.nativeElement.offsetWidth;
    console.log("next clicked, new current slide is: ", offset);
    const myAnimation: AnimationFactory = this.buildAnimation(this.slider?.nativeElement);
    this.player = myAnimation.create(this.slider?.nativeElement);
    this.player.play();
/*    if (this.currentSlide + 1 === this.items?.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.items!.length;
    * (!this.itemWidth ? 1 : this.itemWidth);
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    console.log(offset)

    this.player = myAnimation.create(this.workSlider?.nativeElement);
    this.player.play();*/
  }

  prev() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
    const myAnimation: AnimationFactory = this.buildAnimation(this.slider?.nativeElement.offsetWidth);
    console.log(this.slider)
    this.player = myAnimation.create(this.slider?.nativeElement);
    this.player.play();
/*    if (this.currentSlide === 0) return;
    this.currentSlide = ((this.currentSlide - 1) + this.items!.length) % this.items!.length;
    const offset = this.currentSlide * (!this.itemWidth ? 1 : this.itemWidth);
    console.log(offset)
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.workSlider?.nativeElement);
    this.player.play();*/
  }
}

