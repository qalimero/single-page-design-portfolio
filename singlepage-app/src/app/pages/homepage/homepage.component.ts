import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  headerFooter =
    {
      src: 'assets/images/logo.svg',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
