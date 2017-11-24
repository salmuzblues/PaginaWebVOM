import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-inAnimation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }
}

