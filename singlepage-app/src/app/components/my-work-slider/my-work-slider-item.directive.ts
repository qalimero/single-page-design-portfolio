import {Directive, TemplateRef} from "@angular/core";

@Directive({
  selector: '[carouselItem]'
})
export class MyWorkSliderItemDirective {

  constructor( public tpl : TemplateRef<any> ) {
  }
}
