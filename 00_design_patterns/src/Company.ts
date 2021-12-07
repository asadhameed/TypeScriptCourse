import Faker from 'faker'
import { Position } from './CustomMap';
export class Company implements Position {
    name :string;
    location:{
        lng:number;
        lat:number;
    }

    constructor(){
        this.name= Faker.company.companyName();
        this.location={
            lat:parseFloat(Faker.address.latitude()) ,
            lng:parseFloat(Faker.address.longitude()),
        }
    }

    markContent=():string=>{
        return `Company name is ${this.name}`
    }

}