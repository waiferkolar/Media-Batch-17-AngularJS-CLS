import {Component, OnDestroy, OnInit} from '@angular/core';
import {Localservice} from '../sysgem/localservice';

@Component({
  selector: 'bm-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  mm = 'ျမန္မာကြ';
  isFont;

  constructor(private http: Localservice) {
    //http.showNav = false;

  }

  ngOnInit() {
    this.http.isFontBool.subscribe(
      response => {
        this.isFont = response;
      }
    );

    let width = window.outerWidth;
    let height = window.outerHeight;
    let loadimg = document.querySelector('#load-img');
  }

  ngOnDestroy(): void {
    this.http.showNav = true;
  }


}
