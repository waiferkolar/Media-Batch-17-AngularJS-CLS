import {Component} from '@angular/core';

@Component({
  selector: 'bm-root',
  template: `
    <bm-nav></bm-nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'bm_cm_dm';
}
