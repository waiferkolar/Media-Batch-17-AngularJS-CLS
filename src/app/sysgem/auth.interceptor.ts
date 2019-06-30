import {Localservice} from './localservice';
import {HttpInterceptor} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: Localservice) {
  }

  intercept(req, next) {
    let token = this.http.token;
    let modiR = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(modiR);
  }

}
