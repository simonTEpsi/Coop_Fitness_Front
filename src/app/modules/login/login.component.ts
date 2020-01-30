import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../../core/services/login/register.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly navController: NavController,
    private readonly http: HttpClient,
    private readonly registerService: RegisterService) 
    { }

  public loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.registerService.getCurrentregisterFormValue();
    console.log(this.loginForm);
  }

  login() {
    console.log(this.loginForm.value);
    this.navController.navigateRoot('/home');
    /**
    this.http.post('localhost:3000', this.registerForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
    }); */
  }
}