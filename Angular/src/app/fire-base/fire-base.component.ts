// import { Component, OnInit } from '@angular/core';
// import {map} from 'rxjs/operators';
// import { FirebaseService } from '../firebase.service';
// @Component({
//   selector: 'app-fire-base',
//   templateUrl: './fire-base.component.html',
//   styleUrls: ['./fire-base.component.css']
// })
// export class FireBaseComponent implements OnInit {

//   constructor(private fbService: FirebaseService) { }

//   ngOnInit() {

//     this.fbService.getPostData().pipe(
//       map(responseData => {
//         // empty array 
//         const postArray = [];

//         // for in loop
//         for(const key in responseData) {

//           // check key 
//           if(responseData.hasOwnProperty(key)) {
//             // push the new value into array 
//             postArray.push({...responseData[key], id:key})
//           }
//         }
//         return postArray;
//       } )
//     ).subscribe(res => {
//       console.log('after manipulate the data', res);
//     })
//   }

// }
