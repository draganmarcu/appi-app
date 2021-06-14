import { Injectable } from '@angular/core';
export interface Items {
    name: string;
    age:number;
    
}

@Injectable()
export class AppService {
    
  constructor() { }

}