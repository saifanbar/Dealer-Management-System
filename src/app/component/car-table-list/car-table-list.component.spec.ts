import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableListComponent } from './car-table-list.component';

describe('CarTableListComponent', () => {
  let component: CarTableListComponent;
  let fixture: ComponentFixture<CarTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
