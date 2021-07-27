import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addDevice(){
    this.router.navigate(['/add']);
  }

}
