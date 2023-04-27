import {VehicleInterface} from "./vehicle.interface";

export interface CarInterface extends VehicleInterface {
  readonly isFourWheelDrive?: boolean;
}
