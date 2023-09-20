import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getAllUser(){
  return[
    {id:101,name:'johan',city:'DELHI',salary:2,dob:new Date('05/4/1978')},
    {id:102,name:'Dohan',city:'PUNE',salary:8,dob:new Date('02/4/1999')},
    {id:103,name:'Aku',city:'MUMBAI',salary:12,dob:new Date('05/1/1967')},
    {id:104,name:'Akash',city:'UK',salary:23,dob:new Date('09/8/1934')},

  ]
}
}
