import { RegisterService } from "./services/register.service";
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [SharedModule, HttpClientModule],
    exports: [],
    declarations: [],
    providers: [RegisterService],
})

export class CoreModule { }
