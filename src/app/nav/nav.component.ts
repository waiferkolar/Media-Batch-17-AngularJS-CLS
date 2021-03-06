import {Component, OnInit} from '@angular/core';
import {Localservice} from '../sysgem/localservice';
import {Router} from '@angular/router';
import {Loki} from '../sysgem/loki';

@Component({
  selector: 'bm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth;
  isFont;

  constructor(private http: Localservice, private router: Router) {
  }

  ngOnInit() {
    this.http.isFontBool.subscribe(
      response => {
        this.isFont = response;
      }
    );
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response;
      }
    );
    this.isAuth = Loki.isAuth();
  }

  logout() {
    this.http.changeAuth(false);
    Loki.removeAuth();
    this.http.token = '';
    this.router.navigate(['']);

  }

  toggleFontNow(bol) {
    this.http.toggleFon(bol);
  }

}
