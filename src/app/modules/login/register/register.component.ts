import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../../../core/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private readonly http: HttpClient, private readonly registerService: RegisterService ) {
   }

  public registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.registerService.getCurrentregisterFormValue();
    console.log(this.registerForm);
  }

  onValid() {
    console.log(this.registerForm.value);
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