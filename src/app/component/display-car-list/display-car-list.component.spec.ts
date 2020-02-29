import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarListComponent } from './display-car-list.component';

describe('DisplayCarListComponent', () => {
  let component: DisplayCarListComponent;
  let fixture: ComponentFixture<DisplayCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
