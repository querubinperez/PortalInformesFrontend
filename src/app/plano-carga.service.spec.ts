import { TestBed } from '@angular/core/testing';

import { PlanoCargaService } from './plano-carga.service';

describe('PlanoCargaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanoCargaService = TestBed.get(PlanoCargaService);
    expect(service).toBeTruthy();
  });
});
