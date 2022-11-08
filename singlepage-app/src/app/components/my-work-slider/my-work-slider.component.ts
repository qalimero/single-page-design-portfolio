import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef, Input,
  QueryList, ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {MyWorkSliderItemDirective} from "./my-work-slider-item.directive";
import {AnimationBuilder, AnimationFactory, AnimationPlayer, animate, style} from "@angular/animations";

@Directive({
  selector: '.app-my-work-slider-item'
})
export class MyWorkSliderItemElement {
}

@Component({
  selector: 'app-my-work-slider',
  exportAs: 'slider',
  styleUrls: ['./my-work-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="my-work-slider">
      <div class="my-work-slider_wrapper" #workSlider>
        <ng-container *ngFor="let item of items; let i = index">
          <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
        </ng-container>
      </div>
      <div class="my-work-slider_controls" *ngIf="showControls">
        <app-button id="prev" (click)="prev()" classToAdd="btn_slider btn_slider-prev">Prev</app-button>
        <app-button id="next" (click)="next()" classToAdd="btn_slider btn_slider-next">Next</app-button>
      </div>
    </section>
  `
})

export class MyWorkSliderComponent implements AfterViewInit {
  @ContentChildren(MyWorkSliderItemDirective) items: QueryList<MyWorkSliderItemDirective> | undefined;
  @ViewChildren(MyWorkSliderComponent, {read: ElementRef}) private itemsElements: QueryList<ElementRef> | undefined;
  @ViewChild('workSlider') private workSlider: ElementRef | undefined;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private itemWidth : number | undefined ;
  private player: AnimationPlayer | undefined;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  constructor(private builder: AnimationBuilder) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.itemWidth = this.itemsElements?.first.nativeElement.getBoundingClientRect().width;

      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    });
  };

  next() {
    if (this.currentSlide + 1 === this.items?.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.items!.length;
    let offset = this.currentSlide * this.itemWidth!;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    console.log(this.currentSlide)
    console.log(this.itemWidth)
    this.player = myAnimation.create(this.workSlider?.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset = 0) {
    return this.builder.build([
      animate(this.timing, style({transform: `translateX(-${offset}px)`}))
    ]);
  }

  prev() {
    if (this.currentSlide === 0) return;
    this.currentSlide = ((this.currentSlide - 1) + this.items!.length) % this.items!.length;
    const offset = this.currentSlide * this.itemWidth!;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.workSlider?.nativeElement);
    this.player.play();
  }

}
