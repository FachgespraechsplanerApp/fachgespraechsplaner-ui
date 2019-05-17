import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from '../models/login-result-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('http://fp.test/api/auth/login', {
      email: email,
      password: password
    });
  }
}
