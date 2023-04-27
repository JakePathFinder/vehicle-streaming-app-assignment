import { Injectable } from '@angular/core';
import { VehicleObserverService} from "./vehicle-observer.service";
import { VehicleInterface } from "../interfaces/vehicle.interface";

@Injectable({
  providedIn: 'root'
})
export class VehicleObserverFactoryService {
    static CreateVehicleObserver<T extends VehicleInterface>(url: string): VehicleObserverService<T> {
      return new VehicleObserverService<T>(url);
    }
}
