import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {
  headerFooterImage =
    {
      src: 'assets/images/logo.svg',
    };
  constructor( private el: ElementRef ) {
    console.log(this.el.nativeElement)
  }

  ngOnInit(): void {
  }
}
