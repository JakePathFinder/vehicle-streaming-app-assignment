import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesMainComponent } from './vehicles-main/vehicles-main.component';
import {MatCardModule} from "@angular/material/card";
import {VehicleCardComponent} from './vehicle-card/vehicle-card.component';

@NgModule({
  declarations: [
    VehiclesMainComponent,
    VehicleCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    VehiclesMainComponent
  ]
})
export class VehiclesModule { }
