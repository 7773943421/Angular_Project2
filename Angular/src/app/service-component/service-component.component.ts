import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
value:any[]=[]
  constructor( private Service:ServiceService) { }

  ngOnInit() {
    this.value=this.Service.getAllUser();
   
  }

}
