import { Component, OnInit } from '@angular/core';


import { BaseEntity } from './base';
import { BaseService } from './base.service';
//import { DisplayMessage } from '../shared/models/display-message';


export abstract class BaseComponent<T extends BaseEntity>  {

  entity: T;
  errorMessage: string;

  public compareFn(user1: BaseEntity, user2: BaseEntity) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
  }  

}