import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

url='http://localhost:3000/Car';

  constructor(private httpclient:HttpClient) { }
  cardata(){
  return this.httpclient.get(this.url);
}
}
 