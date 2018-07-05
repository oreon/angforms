import { Injectable } from '@angular/core';
import { BaseService } from '@app/base/base.service';
import * as _ from "lodash";

export interface MyCustomer{
  email:string
  mobile:string
  amount:number
  medicalConditions:string
}

@Injectable()
export class WizardService /*extends BaseService<MyCustomer>*/{

  public entity:MyCustomer = <MyCustomer>{};

  constructor() {
    //super();
    //this.entity = <MyCustomer>{};
  }

  setEntity(partialEntity: any){
    _.assign(this.entity, partialEntity);
    console.log(this.entity)
  }
}
