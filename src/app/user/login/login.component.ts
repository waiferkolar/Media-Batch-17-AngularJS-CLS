import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Localservice} from '../../sysgem/localservice';
import {Router} from '@angular/router';

@Component({
  selector: 'bm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;

  constructor(private http: Localservice, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl(''),
    });
  }

  startLogin(data) {
    this.http.loginUser(data).subscribe(
      response => {
        if (response.con) {
          this.http.token = response.token;
          this.http.changeAuth(response.con);
          this.router.navigate(['admin']);
        } else {
          alert('Login Fail try again!');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
