import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardGridComponent implements OnInit {
  @Input() text = "";
  gridImage =
    {
      img1: 'assets/images/pattern-graphic-design.svg',
      img2: 'assets/images/pattern-ui-ux.svg',
      img3: 'assets/images/pattern-apps.svg',
      img4: 'assets/images/pattern-illustrations.svg',
      img5: 'assets/images/pattern-photography.svg',
      img6: 'assets/images/pattern-motion-graphics.svg',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
