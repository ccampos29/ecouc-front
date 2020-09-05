import { TestBed } from '@angular/core/testing';

import { HeadquartersEmployeePickupService } from './headquarters-employee-pickup.service';

describe('HeadquartersEmployeePickupService', () => {
  let service: HeadquartersEmployeePickupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadquartersEmployeePickupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
