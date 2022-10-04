import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  headerFooterImage =
    {
      img1: 'assets/images/pattern-graphic-design.svg',
      img2: 'assets/images/logo.svg',
      img3: 'assets/images/logo.svg',
      img4: 'assets/images/logo.svg',
      img5: 'assets/images/logo.svg',
      img6: 'assets/images/logo.svg',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
