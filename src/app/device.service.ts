import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices: Device[] = [
    {
      name:  "Device01",
      brand: "Lenovo",
      model: "ITZ400"
    },
    {
      name:  "Device02",
      brand: "Dell",
      model: "Latitude"
    }
  ]

  constructor() { }

  getDevices(){
    return this.devices;
  }

  addDevice(device:Device){
    this.devices.push(device);
    console.log(this.devices);
  }
}
