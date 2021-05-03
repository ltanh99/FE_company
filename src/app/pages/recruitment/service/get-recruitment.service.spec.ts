import { TestBed } from '@angular/core/testing';

import { GetRecruitmentService } from './get-recruitment.service';

describe('GetRecruitmentService', () => {
  let service: GetRecruitmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecruitmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
