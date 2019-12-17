import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CguComponent } from './cgu/cgu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'cgu',
        component: CguComponent
      }
    ]),
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CguComponent
  ],
  providers: [],
})
export class BaseModule { }
