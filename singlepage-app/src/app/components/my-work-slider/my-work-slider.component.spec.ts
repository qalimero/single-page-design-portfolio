import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkSliderComponent } from './my-work-slider.component';

describe('MyWorkSliderComponent', () => {
  let component: MyWorkSliderComponent;
  let fixture: ComponentFixture<MyWorkSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorkSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
