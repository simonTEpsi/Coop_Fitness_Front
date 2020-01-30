import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RegisterService {
  public registerForm: Observable<any>;
  private readonly registerFormSubject: BehaviorSubject<FormGroup>;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registerFormSubject = new BehaviorSubject<FormGroup>(this.initRegisterForm());
    this.registerForm = this.registerFormSubject.asObservable();
  }

  public setCurrentRegisterFormValue(loginForm: FormGroup): void {
    this.registerFormSubject.next(loginForm);
  }

  private initRegisterForm(): FormGroup {
    const form: FormGroup = this.formBuilder.group({
      username: '',
      name: '',
      firstName: '',
      address: '',
      password: '',
      email: '',
      date: ''
    });
    return form;
  }

  public getCurrentregisterFormValue(): any {
    return this.registerFormSubject.value;
  }
}
