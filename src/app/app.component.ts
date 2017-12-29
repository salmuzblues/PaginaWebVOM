import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // this method is to load the page from the beginning.
  onActivate(){
    window.scroll(0,0);
  }
}

