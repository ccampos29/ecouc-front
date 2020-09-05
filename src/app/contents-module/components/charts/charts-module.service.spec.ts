import { TestBed } from '@angular/core/testing';

import { ChartsModuleService } from './charts-module.service';

describe('ChartsModuleService', () => {
  let service: ChartsModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
