import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-paragraph-button',
  templateUrl: './title-paragraph-button.component.html',
  styleUrls: ['./title-paragraph-button.component.scss']
})
export class TitleParagraphButtonComponent  {
@Input() titleToAdd = "";
@Input() textToAdd = "";
@Input() textBtnToAdd = "";
  constructor() { }


}
