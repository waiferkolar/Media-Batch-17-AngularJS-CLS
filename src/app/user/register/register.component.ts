import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Localservice} from '../../sysgem/localservice';
import {Router} from '@angular/router';

@Component({
  selector: 'bm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;

  constructor(private http: Localservice, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  startRegister(data) {
    this.http.registerUser(data).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['user']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
