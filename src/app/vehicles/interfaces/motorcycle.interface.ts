import {VehicleInterface} from "./vehicle.interface";

export interface MotorcycleInterface extends VehicleInterface {
  readonly hasSidecar?: boolean;
}
