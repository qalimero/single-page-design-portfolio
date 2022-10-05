import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  @Input() text = "";
  gridImage =
    {
      img1: 'assets/images/pattern-graphic-design.svg',
      img2: 'assets/images/pattern-ui-ux.svg',
      img3: 'assets/images/pattern-apps.svg',
      img4: 'assets/images/logo.svg',
      img5: 'assets/images/logo.svg',
      img6: 'assets/images/logo.svg',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
