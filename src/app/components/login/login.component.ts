import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    institutions: Array<Array<string>> = [['ovmkassel', 'Oskar-von-Miller-Schule Kassel']];
    model: Login = new Login(this.institutions[0][0], '', '', false);

    ngOnInit(): void {
        //
    }

    onSubmit() {
      // TODO: make REST-Call to API Server to Login the user.
      // TODO: redirect User to /dashboard after successful login.
      console.log(this.model); // TODO: remove console.log when done.
    }
}
