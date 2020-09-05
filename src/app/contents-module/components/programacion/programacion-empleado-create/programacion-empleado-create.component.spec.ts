import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionEmpleadoCreateComponent } from './programacion-empleado-create.component';

describe('ProgramacionEmpleadoCreateComponent', () => {
  let component: ProgramacionEmpleadoCreateComponent;
  let fixture: ComponentFixture<ProgramacionEmpleadoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionEmpleadoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionEmpleadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
