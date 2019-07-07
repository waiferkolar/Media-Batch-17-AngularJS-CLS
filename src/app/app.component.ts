import {Component} from '@angular/core';
import {Localservice} from './sysgem/localservice';

@Component({
  selector: 'bm-root',
  template: `
    <bm-nav *ngIf="self.showNav"></bm-nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'bm_cm_dm';
  menu = null;
  self;

  constructor(http: Localservice) {
    this.self = http;
  }
}
