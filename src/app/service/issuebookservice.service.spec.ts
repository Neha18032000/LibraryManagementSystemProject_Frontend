import { TestBed } from '@angular/core/testing';

import { IssuebookserviceService } from './issuebookservice.service';

describe('IssuebookserviceService', () => {
  let service: IssuebookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuebookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
