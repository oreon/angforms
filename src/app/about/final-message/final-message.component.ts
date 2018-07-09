import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'final-message',
  templateUrl: './final-message.component.html',
  styleUrls: ['./final-message.component.scss']
})
export class FinalMessageComponent implements OnInit {

  @Input() entity:any;

  constructor() {
    
   }

  ngOnInit() {
  }

}
