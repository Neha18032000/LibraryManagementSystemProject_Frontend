import { TestBed } from '@angular/core/testing';

import { BooksserviceService } from './booksservice.service';

describe('BooksserviceService', () => {
  let service: BooksserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
