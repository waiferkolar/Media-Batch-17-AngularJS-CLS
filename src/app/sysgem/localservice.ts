import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class Localservice {
  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  constructor(private http: HttpClient) {
  }

  changeAuth(val: boolean) {
    this.isAuth.next(val);
  }
}
