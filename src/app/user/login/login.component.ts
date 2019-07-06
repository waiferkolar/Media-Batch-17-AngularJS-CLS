import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Localservice} from '../../sysgem/localservice';
import {Router} from '@angular/router';
import {Loki} from '../../sysgem/loki';

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
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    });
  }

  startLogin(data) {
    this.http.loginUser(data).subscribe(
      response => {
        if (response.con) {
          Loki.saveAuth(response.token);
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
