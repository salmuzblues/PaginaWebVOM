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

  @HostListener ('click') open() {
    this.isOpen = true;
    }
  @HostListener('mouseleaves') close() {

    }
}


