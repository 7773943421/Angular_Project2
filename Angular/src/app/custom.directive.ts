//import { Element } from '@angular/compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
//d I
  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor='green';
   }

}
