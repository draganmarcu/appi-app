import { Component } from '@angular/core';
import { AppService, Items } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-app';
  item: Items[] = [
    { name: 'Marcu', age: 21 }    
  ];

  constructor(private appService: AppService) {
    this.showPerson()
  }

  clickEvent() {
    return this.showPerson()
  }

  
    addButton(){
      const values ="";
      const inputv = document.getElementById('add');
      const w = document.getElementById('faves');
      const li = document.createElement("li");
      li.appendChild(document.createTextNode("values"));

  }
  
  showPerson() {
    this.item.push({ name: 'Marcu', age: 21 });
  }
}