import { Component, OnInit } from '@angular/core';
import { upToDownAnimation } from '../animations/index';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  animations: [ upToDownAnimation ],
  host: { '[@upToDownAnimation]': '' },
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
