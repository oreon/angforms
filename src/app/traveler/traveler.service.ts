

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { Traveler } from './traveler';
import { BaseService } from '../base/base.service';

@Injectable()
export class TravelerService extends BaseService<Traveler>{

  constructor(protected _http: Http ) {
    super(_http, 'travelers')
  }
}