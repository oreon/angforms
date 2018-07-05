import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-travel-wizard',
  templateUrl: './my-travel-wizard.component.html',
  styleUrls: ['./my-travel-wizard.component.scss']
})
export class MyTravelWizardComponent implements OnInit {

  currentInd = 0;
  constructor() { }

  ngOnInit() {
  }

  public showMe(ind: number): boolean {
    return ind === this.currentInd;
  }

  onNext(msg:string):void{
    this.currentInd++; // = this.current + 1;
    console.log(this.currentInd);
  }

  showFinal():boolean{
    return this.currentInd >= 3;
  }


}


