import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../animations/fade-inAnimation';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  // animations: [ fadeInAnimation ],
  // host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
