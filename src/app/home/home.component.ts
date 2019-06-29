import {Component, OnInit} from '@angular/core';
import {Localservice} from '../sysgem/localservice';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAtuh;

  constructor(private http: Localservice) {
  }

  ngOnInit() {
  }

  toggleAuth() {
    this.isAtuh = !this.isAtuh;
    this.http.changeAuth(this.isAtuh);
  }

}
