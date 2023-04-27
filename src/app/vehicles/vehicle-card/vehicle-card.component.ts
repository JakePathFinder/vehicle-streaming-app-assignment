import { Component, Input } from '@angular/core';
import {VehicleInterface} from "../interfaces/vehicle.interface";


@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent<T extends VehicleInterface> {
  @Input() vehicle?: T | null = null;
  @Input() image?: string;
  @Input() count: number = 0;

  constructor() {
  }
}
