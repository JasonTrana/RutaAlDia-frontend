import { TestBed } from '@angular/core/testing';

import { ApiMapControllerService } from './api-map-controller.service';

describe('ApiMapControllerService', () => {
  let service: ApiMapControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMapControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
