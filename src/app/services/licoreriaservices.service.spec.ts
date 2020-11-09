import { TestBed } from '@angular/core/testing';

import { LicoreriaservicesService } from './licoreriaservices.service';

describe('LicoreriaservicesService', () => {
  let service: LicoreriaservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicoreriaservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
