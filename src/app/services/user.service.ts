import { Injectable } from '@angular/core';
import {UserModel} from '../models/user-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from '../models/login-result-model';
import {NotifierService} from 'angular-notifier';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private notifier: NotifierService) {  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  logOut(): void {
    localStorage.removeItem(TOKEN);
  }

  getUsername(): string {
    return '_birnbach';
  }

  // getRealName(): string {
  //   let username = 'foo';
  //   this.getCurrentUser().subscribe(
  //     r => {
  //       console.log(r.user.name);
  //       if (r.user.name) {
  //         username = r.user.name;
  //       }
  //     },
  //     r => {
  //       this.notifier.notify( 'error', r.error.message );
  //       console.log(r.error.message);
  //     }
  //   );
  //   return username;
  // }
  //
  //
  //
  // getCurrentUser(): Observable<any> {
  //   const headers = {
  //     headers: new HttpHeaders()
  //       .set('Authorization',  `Bearer ${this.getToken()}`)
  //   };
  //   return this.http.get<any>('http://fp.test/api/users/1', headers);
  // }
}
