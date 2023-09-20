import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  Title:string="I am coming form Parent";
allUser:any;
childData:string
  constructor(private commonServive:CommonService, private firebaseService :FirebaseService){
    this.firebaseService.createPost().subscribe(res=>{
      console.log('Res from firebase',res);
      
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
//     ngOnInit(){
//        getdata():{
//         this.commonServive.getAllUser().subscribe(res=>{
//           console.log(res);
          
//         })
//        }

//     //   addUser(formObg){
    
//     //     this.commonServive.createUser(formObg).subscribe(res=>{
//     // console.log("User has been added" ,res);
    
    
//     //     })
   
//     }
//     }
    
  
  
  

// function ngOnInit() {
//   throw new Error('Function not implemented.');


parentMEthod(data){
  this.childData=data
}
}

