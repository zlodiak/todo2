import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { };

  getUsers(): Observable<any> {
  	return this.http.get('http://127.0.0.1:8000/app_todo2/users_list');
  };

}
