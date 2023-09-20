import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
// import { CarComponent } from './car/car.component';
// import { HttpClientModule } from '@angular/common/http';
// //import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// //import { FormsModule } from '@angular/forms';
// import { StyleComponent } from './style/style.component';
// import { NgclassComponent } from './ngclass/ngclass.component';
// import { CustomDirective } from './custom.directive';
// //import { TempleteFormComponent } from './templete-form/templete-form.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { ProductComponent } from './product/product.component';
// import { LoginComponent } from './login/login.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


// import { BindingComponent } from './binding/binding.component';
// import { FormsModule } from '@angular/forms';
// import { ServiceComponentComponent } from './service-component/service-component.component';
// import { ServiceService } from './service.service';
// import { TempleteFormComponent } from './templete-form/templete-form.component';
// import { FireBaseComponent } from './fire-base/fire-base.component';
// import { ProductsModule } from './product/products/products.module';
// import { DemopostComponent } from './demopost/demopost.component';
// import { PostlistComponent } from './postlist/postlist.component';
// import { PostdetailsComponent } from './postdetails/postdetails.component';
// import { Comp1Component } from './comp1/comp1.component';
// import { Comp2Component } from './comp2/comp2.component';
// import { Comp3Component } from './comp3/comp3.component';
// import { Comp4Component } from './comp4/comp4.component';
// import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';

//import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    //ReactiveFormComponent,
    // StyleComponent,
    // NgclassComponent,
    // CustomDirective,
    //TempleteFormComponent,
    // AboutusComponent,
    // ContactusComponent,
    // ProductComponent,
    LoginComponent,
    // PagenotfoundComponent,
   
    //BindingComponent,
    //ServiceComponentComponent,
    //TempleteFormComponent,
    //FireBaseComponent,
    //DemopostComponent,
    //PostlistComponent,
    //PostdetailsComponent,
    // Comp1Component,
    // Comp2Component,
    // Comp3Component,
    // Comp4Component,
    //WashingMachineComponent
    //ChildComponentComponent
    
  ],
  imports: [ProductsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
   //ProductsModule

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
