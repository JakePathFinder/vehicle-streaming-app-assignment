import { TestBed } from '@angular/core/testing';

import { VehicleObserverFactoryService } from './vehicle-observer-factory.service';

describe('VehicleObserverFactoryService', () => {
  let service: VehicleObserverFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleObserverFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
