

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { Travelers } from './travelers';
import { BaseService } from '../base/base.service';

@Injectable()
export class TravelersService extends BaseService<Travelers>{

  constructor(protected _http: Http ) {
    super(_http, 'travelerss')
  }
}