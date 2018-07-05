import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  @Input() currentInd: number = 0;

  steps = [
    { name: 'trip',
    },
    { name: 'options',
      // disabledImg: 'assets/travel/quote.png',
      // activeImg: 'assets/travel/quoteActiveTL.png',
      // completeImg: 'assets/travel/quoteActive.png'
    },
    { name: 'medical'}
  ]

  ngOnInit() {
  }

}
