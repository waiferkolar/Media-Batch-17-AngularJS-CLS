import {Localservice} from './localservice';
import {HttpInterceptor} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Loki} from './loki';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: Localservice) {
  }

  intercept(req, next) {
    let token = Loki.getAuth();
    let modiR = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(modiR);
  }

}
