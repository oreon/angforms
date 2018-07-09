

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { Trip } from './trip';
import { BaseService } from '../base/base.service';

@Injectable()
export class TripService extends BaseService<Trip>{

  constructor(protected _http: Http ) {
    super(_http, 'trips')
  }
}