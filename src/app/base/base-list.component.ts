import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { BaseEntity } from './base';
import { BaseService } from './base.service';


export abstract class BaseListComponent<T extends BaseEntity> implements OnInit {

  entities: T[];
  errorMessage: string;
  response_status: number;
  is_insert: boolean = false;

  constructor(protected service: BaseService<T>, protected router: Router) {
    this.entities = <T[]>[];
  }


  ngOnInit() {
    this.service.getRecords().subscribe(
      records => this.entities = records,
      error => this.errorMessage = <any>error
    );
  }

  delete(record: T) {
    this.service.delete(record.id.toString()).subscribe(
      response => {
        this.response_status = response;
        if (this.response_status === 204) {
          this.entities = 
            this.entities.filter(current_item => !(current_item.id === record.id));
        }
      },
      error => this.errorMessage = <any> error);
  }

  // onNewUser(user: T){
  //   this.entities.push(user);
  //   this.showAddUser();
  // }

  showAdd() {
    this.router.navigate(['/' + this.service.url + '/add']);
  }

  showEdit(record: T) {
    this.router.navigate(['/' + this.service.url, record.id.toString(), 'edit']);
  }

  gotoHome() {
    this.router.navigate(['/welcome']);
  }
}
