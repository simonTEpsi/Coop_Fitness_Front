import { RegisterService } from "./services/login/register.service";
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent,
    ],
    providers: [RegisterService],
})

export class CoreModule { }
