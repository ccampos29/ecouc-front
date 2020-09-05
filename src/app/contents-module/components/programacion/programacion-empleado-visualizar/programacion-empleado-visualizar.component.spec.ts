import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionEmpleadoVisualizarComponent } from './programacion-empleado-visualizar.component';

describe('ProgramacionEmpleadoVisualizarComponent', () => {
  let component: ProgramacionEmpleadoVisualizarComponent;
  let fixture: ComponentFixture<ProgramacionEmpleadoVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionEmpleadoVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionEmpleadoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
