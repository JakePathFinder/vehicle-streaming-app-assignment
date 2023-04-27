import * as signalR from '@microsoft/signalr';
import {VehicleInterface} from "../interfaces/vehicle.interface";
import { environment } from '../../../environments/environment';
import {Observable, Subject} from 'rxjs'

export class VehicleObserverService<T extends VehicleInterface> {

  private readonly url: string;
  private hubConnection: signalR.HubConnection;
  private newVehicleGenerationSubect: Subject<T> = new Subject<T>();

  constructor(url: string) {
    this.url = url;

    this.hubConnection = this.buildHubConnection(url);
    this.startVehicleGenerationListener();
  }

  public startConnection = () => {
    this.startVehicleGenerationListener();

    this.hubConnection
      .start()
      .then(()=> {
        console.log('Connection Started');
        this.subscribeToVehicleService();
      })
      .catch((err) => console.log('Error starting connection:'+err))
  }

  public stopConnection = () => {
    if (!this.hubConnection) {
      return;
    }
    this.hubConnection.stop()
      .then(()=> console.log('Connection Stopped'))
      .catch((err) => console.log('Error stopping connection:'+err))
  }

  public NewVehicleGenerated(vehicle: T) {
    console.log('NewVehicleGenerated '+vehicle?.name);
    this.newVehicleGenerationSubect.next(vehicle);
    console.log('NewVehicleGenerated done '+vehicle?.name);
  }

  public NewVehicleGeneratedSubscription(): Observable<T> {
    return this.newVehicleGenerationSubect.asObservable();
  }

  private buildHubConnection(url: string) {
    return new signalR.HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .build();
  }

  private subscribeToVehicleService() :void {
    this.hubConnection.invoke("Subscribe", environment.identity)
      .then(()=> console.log('Subscribed Successfully'))
      .catch(err => console.log('Error subscribing:'+err))
  }

  private startVehicleGenerationListener = () => {
    this.hubConnection.on('NewVehicleGenerated', (vehicle: T) => this.NewVehicleGenerated(vehicle));
  }
}
