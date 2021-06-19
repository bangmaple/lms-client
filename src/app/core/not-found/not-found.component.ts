import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  style: any = {
    'height': '500px',
    'display': 'grid',
    'place-items': 'center'
  };

  constructor() { }

  ngOnInit(): void {
    this.style.height = window.innerHeight + 'px';

  }

}
