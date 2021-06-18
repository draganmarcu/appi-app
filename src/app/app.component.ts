import {Component} from '@angular/core';
import {AppService, Items} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-app';
  item: Items[] = [
    {name: 'Marcu', age: 21}
  ];

  freshPersonsList: Array<any> = [];
  name = '';
  age;

  constructor(private appService: AppService) {
  }

  addFreshPerson(): void {
    const newlyCreatedPerson = {
      name: this.name,
      age: this.age
    };
    this.freshPersonsList.push(newlyCreatedPerson);

    this.name = '';
    this.age = null;
  }


  addPerson(): void {
    this.item.push({name: 'Marcu', age: 21});
  }

  removeItem(index: number):void{
    this.freshPersonsList.splice(index, 1);
  }


  // Create method
  // Search item by index in the array then remove it
}
