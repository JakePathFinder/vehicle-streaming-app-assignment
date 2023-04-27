import { Component, OnInit, OnDestroy} from '@angular/core';
import {VehicleObserverFactoryService} from "../services/vehicle-observer-factory.service";
import {VehicleObserverService} from "../services/vehicle-observer.service";
import {CarInterface} from "../interfaces/car.interface";
import {MotorcycleInterface} from "../interfaces/motorcycle.interface";
import {environment} from "../../../environments/environment";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vehicles-main',
  templateUrl: './vehicles-main.component.html',
  styleUrls: ['./vehicles-main.component.css']
})
export class VehiclesMainComponent implements OnInit, OnDestroy{
  carObserver: VehicleObserverService<CarInterface>;
  motorcycleObserver: VehicleObserverService<MotorcycleInterface>;
  latestCar: CarInterface | null = null;
  totalCars: number = 0;
  latestMotorcycle: MotorcycleInterface | null = null;
  totalMotorCycles: number = 0;
  private carSubscription: Subscription | null = null;
  private motorcycleSubscription: Subscription | null = null;

    constructor() {
      this.carObserver = VehicleObserverFactoryService.CreateVehicleObserver<CarInterface>(environment.carSubscriptionUrl);
      this.motorcycleObserver = VehicleObserverFactoryService.CreateVehicleObserver<MotorcycleInterface>(environment.motorcycleSubscriptionUrl);

    }

    ngOnInit() {
      this.carObserver.startConnection();
      this.motorcycleObserver.startConnection();

      this.carSubscription = this.carObserver.NewVehicleGeneratedSubscription().subscribe(
        (vehicle: CarInterface) => {
          this.latestCar = vehicle;
          this.totalCars += 1;
          console.log("New car generated: "+ vehicle.name);
        }
      );

      this.motorcycleSubscription = this.motorcycleObserver.NewVehicleGeneratedSubscription().subscribe(
        (vehicle: MotorcycleInterface) => {
          this.latestMotorcycle = vehicle;
          this.totalMotorCycles += 1;
          console.log("New motorcycle generated: "+ vehicle.name);
        }
      );
    }

    ngOnDestroy() {
      if (this.carSubscription) {
        this.carObserver.stopConnection();
        this.carSubscription.unsubscribe();
      }

      if (this.motorcycleSubscription) {
        this.motorcycleObserver.stopConnection();
        this.motorcycleSubscription.unsubscribe();
      }
    }
}
