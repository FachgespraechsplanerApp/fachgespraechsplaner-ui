import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Input() institutionLogo: string;

  public username: string;

  constructor(private user: UserService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
    this.username = this.getUserRealName();
    console.log(this.username);
  }

  logOut() {
    this.user.logOut();
    this.router.navigateByUrl('/login');
  }

  isLogged() {
    return this.user.isLogged();
  }

  getUserRealName() {
    return 'Max Mustermann';
  }

}
