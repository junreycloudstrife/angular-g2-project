import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-g2-project';
  title = "My first Angular project";
  appMessage = "from AppComponent to FirstComponent";


  appEvent(event){
    // alert('AppComponent event');
    alert(event);
  }
}
