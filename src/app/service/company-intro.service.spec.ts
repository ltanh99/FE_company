import { TestBed } from '@angular/core/testing';

import { CompanyIntroService } from './company-intro.service';

describe('CompanyIntroService', () => {
  let service: CompanyIntroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyIntroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
