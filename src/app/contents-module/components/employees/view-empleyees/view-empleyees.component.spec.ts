import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpleyeesComponent } from './view-empleyees.component';

describe('ViewEmpleyeesComponent', () => {
  let component: ViewEmpleyeesComponent;
  let fixture: ComponentFixture<ViewEmpleyeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpleyeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpleyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
