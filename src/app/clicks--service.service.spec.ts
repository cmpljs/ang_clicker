import { TestBed } from '@angular/core/testing';

import { ClicksServiceService } from './clicks--service.service';

describe('ClicksServiceService', () => {
  let service: ClicksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClicksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
