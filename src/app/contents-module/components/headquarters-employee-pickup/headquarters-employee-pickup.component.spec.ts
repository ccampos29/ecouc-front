import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquartersEmployeePickupComponent } from './headquarters-employee-pickup.component';

describe('HeadquartersEmployeePickupComponent', () => {
  let component: HeadquartersEmployeePickupComponent;
  let fixture: ComponentFixture<HeadquartersEmployeePickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadquartersEmployeePickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquartersEmployeePickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
