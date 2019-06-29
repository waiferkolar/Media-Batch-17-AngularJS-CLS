import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {map} from 'rxjs/operators';

@Injectable()

export class Localservice {

  link = 'http://localhost:3000/';
  registerUrl = this.link + 'user/register';
  loginUrl = this.link + 'user/login';
  token;
  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  constructor(private http: HttpClient) {
  }

  changeAuth(val: boolean) {
    this.isAuth.next(val);
  }

  registerUser(data) {
    return this.http.post(this.registerUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  loginUser(data) {
    return this.http.post(this.loginUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }
}
