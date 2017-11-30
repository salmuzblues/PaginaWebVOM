import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownColors]'
})
export class DropdownColorsDirective {

  //  var
  private isOpen = false;
  // getter
  @HostBinding ('class.open') get opened () {
     return this.isOpen;
  }
  // this is for clicking  the box when mouse clicks
  @HostListener ('click') open() {
    this.isOpen = true;
    }
   // this is for clossing the box when mouse leaves
  @HostListener('mouseleave') close() {
    this.isOpen = false;
    }
}


