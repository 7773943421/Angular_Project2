import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  GotoProduct(){
    this.router.navigate(['product']);
  }

}
