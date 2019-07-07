import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Localservice} from '../../sysgem/localservice';
import {Router} from '@angular/router';

@Component({
  selector: 'bm-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postFrom;
  cats;

  constructor(private http: Localservice, private router: Router) {
    http.getAllCat().subscribe(
      response => {
        if (response.con) {
          this.cats = response.cats;
        } else {
          alert('Can\'t get all Categories!');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.postFrom = new FormGroup({
      'category': new FormControl(''),
      'name': new FormControl(''),
      'price': new FormControl(''),
      'image': new FormControl(''),
      'desc': new FormControl('')
    });
  }

  postNow(data) {
    this.http.createProduct(data).subscribe(
      response => {
        if (response.con) {
          this.router.navigate(['admin']);
        } else {
          alert('Something is not right');
        }
      },
      error => {

      }
    );
  }

}
