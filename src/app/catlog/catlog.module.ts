import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatlogRoutingModule } from './catlog-routing.module';
import { CatlogComponent } from './catlog.component';

@NgModule({
    imports: [
        CommonModule,
        CatlogRoutingModule,
    ],
    declarations : [CatlogComponent],
    providers: [],
})
export class CatlogModule { }
