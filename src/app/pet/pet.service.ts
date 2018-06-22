

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { Pet } from './pet';
import { BaseService } from '../base/base.service';

@Injectable()
export class PetService extends BaseService<Pet>{

  constructor(protected _http: Http ) {
    super(_http, 'pets')
  }
}