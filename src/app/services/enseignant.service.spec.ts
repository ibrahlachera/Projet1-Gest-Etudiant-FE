import { TestBed } from '@angular/core/testing';

import { EnseignantService } from './enseignant.service';

describe('EnseignantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnseignantService = TestBed.get(EnseignantService);
    expect(service).toBeTruthy();
  });
});
