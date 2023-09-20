import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent implements OnInit {
  courseArr : string [] = [

    'Angular', 'HMTL', 'JavaScript'

  ]
  constructor() { }

  ngOnInit() {
  }

  

  OnSubmit(form: NgForm) {

    console.log('my template form values', form.value);

 

    // api/ saveuserData(user: User); // api endpoint 

  }
}

