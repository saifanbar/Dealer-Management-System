import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoFormComponent } from './car-info-form.component';

describe('CarInfoFormComponent', () => {
  let component: CarInfoFormComponent;
  let fixture: ComponentFixture<CarInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
