import { TestBed } from '@angular/core/testing';

import { DutiesService } from './duties.service';

describe('DutiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DutiesService = TestBed.get(DutiesService);
    expect(service).toBeTruthy();
  });
});
