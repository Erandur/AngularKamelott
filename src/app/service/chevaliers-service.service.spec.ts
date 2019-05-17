import { TestBed } from '@angular/core/testing';

import { ChevaliersServiceService } from '../chevaliers-service.service';

describe('ChevaliersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChevaliersServiceService = TestBed.get(ChevaliersServiceService);
    expect(service).toBeTruthy();
  });
});
