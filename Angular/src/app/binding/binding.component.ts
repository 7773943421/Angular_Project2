import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

Title:String="One way Dta Binding";
  imageUrl:String="app/asset/image/GettyImages.jpg";
UserName: any;
  constructor() { }

  ngOnInit() {
  }

  OnClick(){
    this.Title="Data Binding";
  }

}
