

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { QuoteData } from './quoteData';
import { BaseService } from '../base/base.service';

@Injectable()
export class QuoteDataService extends BaseService<QuoteData>{

  constructor(protected _http: Http ) {
    super(_http, 'quoteDatas')
  }
}