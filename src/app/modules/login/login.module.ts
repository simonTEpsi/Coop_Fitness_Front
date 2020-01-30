import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]),
    SharedModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [],
})
export class LoginModule { }
