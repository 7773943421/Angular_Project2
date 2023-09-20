import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

carinfo:any=[];

  constructor(private htCarservice:CarserviceService) { }

  ngOnInit() {
    this.htCarservice.cardata().subscribe(res=>{
      console.log(res);
      this.carinfo=res;
      
    })
  }

}
