

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { PetType } from './petType';
import { BaseService } from '../base/base.service';

@Injectable()
export class PetTypeService extends BaseService<PetType>{

  constructor(protected _http: Http ) {
    super(_http, 'petTypes')
  }
}