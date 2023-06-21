import { TestBed } from '@angular/core/testing';

import { MouduleService } from './module.service';

describe('MouduleService', () => {
  let service: MouduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
