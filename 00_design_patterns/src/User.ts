import  Faker from 'faker'
import {Position} from './CustomMap'
export class User implements Position {
    name:string;
    location:{
        lat:number;
        lng:number;
    }
  
   

    constructor(){
         this.name =  Faker.name.findName();
         this.location={
             lat: parseFloat(Faker.address.latitude()),
             lng: parseFloat(Faker.address.longitude()) 
         }
    }
    markContent=():string=>{
        return `User Name is ${this.name}`
    }
}

