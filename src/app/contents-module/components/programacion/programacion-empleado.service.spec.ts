import { TestBed } from '@angular/core/testing';

import { ProgramacionEmpleadoService } from './programacion-empleado.service';

describe('ProgramacionEmpleadoService', () => {
  let service: ProgramacionEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramacionEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
