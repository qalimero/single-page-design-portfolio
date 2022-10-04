import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  headerFooterImage =
    {
      img1: '../../assets/images/pattern-graphic-design.svg'
    };

  constructor() {
  }

  ngOnInit(): void {
  }

}
