import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [IonicModule.forRoot(),
    ],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    providers: []
  })

  export class CoreModule { }
  