import {Component, OnInit} from '@angular/core';
import {Localservice} from '../../sysgem/localservice';

@Component({
  selector: 'bm-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  token;

  constructor(private http: Localservice) {
    this.token = http.token;
  }

  ngOnInit() {
  }

}
