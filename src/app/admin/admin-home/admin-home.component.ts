import {Component, OnInit} from '@angular/core';
import {Localservice} from '../../sysgem/localservice';

@Component({
  selector: 'bm-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  token;
  docs;
  page;
  pages;
  hide = false;

  constructor(private http: Localservice) {
    this.token = http.token;
  }

  ngOnInit() {
    this.http.getPost(1, 12).subscribe(
      response => {
        this.docs = response.docs;
        this.page = response.page;
        this.pages = response.pages;
        this.hide = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  goNext(np) {
    this.hide = false;
    console.log(np);
    let pp = this.page + np;
    if (pp > 0 && pp <= this.pages) {
      this.http.getPost(pp, 12).subscribe(
        response => {
          this.docs = response.docs;
          this.page = response.page;
          this.pages = response.pages;
          this.hide = true;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('Taw Pi');
    }

  }

}
