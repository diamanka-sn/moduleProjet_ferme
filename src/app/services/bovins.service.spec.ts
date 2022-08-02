import { TestBed } from '@angular/core/testing';

import { BovinsService } from './bovins.service';

describe('BovinsService', () => {
  let service: BovinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BovinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
