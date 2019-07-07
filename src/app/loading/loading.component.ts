import {Component, OnDestroy, OnInit} from '@angular/core';
import {Localservice} from '../sysgem/localservice';

@Component({
  selector: 'bm-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

  constructor(private http: Localservice) {
    http.showNav = false;
  }

  ngOnInit() {
    let width = window.outerWidth;
    let height = window.outerHeight;
    let loadimg = document.querySelector('#load-img');
    loadimg.setAttribute('width', width + 'px');
    loadimg.setAttribute('height', (height) + 'px');
  }

  ngOnDestroy(): void {
    this.http.showNav = true;
  }


}
