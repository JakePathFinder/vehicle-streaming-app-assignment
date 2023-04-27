import { TestBed } from '@angular/core/testing';

import { VehicleObserverService } from './vehicle-observer.service';
import {VehicleInterface} from "../interfaces/vehicle.interface";

describe('VehicleObserverService', () => {
  let service: VehicleObserverService<VehicleInterface>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleObserverService<VehicleInterface>);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
