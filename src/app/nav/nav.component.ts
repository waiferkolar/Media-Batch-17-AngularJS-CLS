import {Component, OnInit} from '@angular/core';
import {Localservice} from '../sysgem/localservice';

@Component({
  selector: 'bm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth;

  constructor(private http: Localservice) {

  }

  ngOnInit() {
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response;
      }
    );
  }

}
