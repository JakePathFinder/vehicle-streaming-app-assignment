import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardComponent } from './vehicle-card.component';
import {VehicleInterface} from "../interfaces/vehicle.interface";

describe('VehicleCardComponent', () => {
  let component: VehicleCardComponent<VehicleInterface>;
  let fixture: ComponentFixture<VehicleCardComponent<VehicleInterface>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCardComponent<VehicleInterface>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
