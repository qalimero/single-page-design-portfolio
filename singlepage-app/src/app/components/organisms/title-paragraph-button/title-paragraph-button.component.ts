import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-title-paragraph-button',
  templateUrl: './title-paragraph-button.component.html',
  styleUrls: ['./title-paragraph-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TitleParagraphButtonComponent  {
  @Input() selectTemplate =  '';

  constructor() { }
}
