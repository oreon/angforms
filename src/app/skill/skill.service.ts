

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { Skill } from './skill';
import { BaseService } from '../base/base.service';

@Injectable()
export class SkillService extends BaseService<Skill>{

  constructor(protected _http: Http ) {
    super(_http, 'skills')
  }
}