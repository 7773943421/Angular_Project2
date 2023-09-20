import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService   {
fakeUrl="http://localhost:3000/users";
  constructor(private _http:HttpClient ) { }

  createUser(user){
return this._http.post(this.fakeUrl,user);
  }
  getAllUser(){
    return this._http.get(this.fakeUrl)
  }
  UpdateUser(){}
  deleteUser(){}
}
