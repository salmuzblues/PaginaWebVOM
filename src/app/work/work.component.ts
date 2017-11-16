import { Component, OnInit } from '@angular/core';
import { slideToLeftAnimation } from '../animations/index';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  animations: [ slideToLeftAnimation ],
  host: { '[@slideToLeftAnimation]' : '' },
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
