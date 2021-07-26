import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  updateDevice(){
    // alert('update device')
    console.log(this.updateForm.value);
  }
}
