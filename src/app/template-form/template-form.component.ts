import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addDevice(form: NgForm){
    this.router.navigate(['/list']);
  }

}
