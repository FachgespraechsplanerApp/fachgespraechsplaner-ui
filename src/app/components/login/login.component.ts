import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import {NotifierService} from 'angular-notifier';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private readonly notifier: NotifierService;

    constructor( notifierService: NotifierService, private api: AuthService, private user: UserService, private router: Router ) {
        this.notifier = notifierService;
    }

    institutions: Array<Array<string>> = [['ovmkassel', 'Oskar-von-Miller-Schule Kassel']];
    model: Login = new Login(this.institutions[0][0], '', '', false);

    ngOnInit(): void {
        //
    }

    onSubmit() {
      this.api.login(
        this.model.email,
        this.model.password
      ).subscribe(
        r => {
          if (r.token) {
            this.user.setToken(r.token);
            this.notifier.notify( 'success', 'Login erfolgt.' );
            this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
          this.notifier.notify( 'error', 'Login fehlgeschlagen.' );
        }
      );
    }
}
