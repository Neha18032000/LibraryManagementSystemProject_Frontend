import { TestBed } from '@angular/core/testing';

import { ReturnbookserviceService } from './returnbookservice.service';

describe('ReturnbookserviceService', () => {
  let service: ReturnbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
