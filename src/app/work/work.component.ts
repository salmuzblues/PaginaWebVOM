import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../animations/fade-inAnimation';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
 // animations: [ fadeInAnimation ],
 // host: { '[@fadeInAnimation]' : '' },
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
