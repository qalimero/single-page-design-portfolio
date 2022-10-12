import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleParagraphButtonComponent } from './title-paragraph-button.component';

describe('TitleParagraphButtonComponent', () => {
  let component: TitleParagraphButtonComponent;
  let fixture: ComponentFixture<TitleParagraphButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleParagraphButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleParagraphButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
