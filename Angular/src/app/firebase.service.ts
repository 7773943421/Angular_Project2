// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {
//   getPostData() {
//     throw new Error('Method not implemented.');
//   }
// fireebaseUrl:"https://angular2023-345a6-default-rtdb.firebaseio.com/";
//   fbService: any;
//   constructor(private http:HttpClient) { }

//   createPost() {
//     let postvariable={
//       title:"Data of FireBase",
//       content:"Thise test fire base"
//     }
//     return this.http.post(this.fireebaseUrl +' post.json' ,postvariable);
//   }

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

