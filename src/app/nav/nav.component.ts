import {Component, OnInit} from '@angular/core';
import {Localservice} from '../sysgem/localservice';
import {Router} from '@angular/router';

@Component({
  selector: 'bm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth;

  constructor(private http: Localservice, private router: Router) {

  }

  ngOnInit() {
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response;
      }
    );
  }

  logout() {
    this.http.changeAuth(false);
    this.http.token = '';
    this.router.navigate(['']);

  }

}
