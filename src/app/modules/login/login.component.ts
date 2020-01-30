import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 
  constructor(private authService: AuthenticationService) { }
 
  ngOnInit() {
  }
 
  login() {
      console.log();
    this.authService.login();
  }
 
}