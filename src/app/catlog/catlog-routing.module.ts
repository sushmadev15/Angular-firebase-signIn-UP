import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatlogComponent } from './catlog.component';

import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: '', component: CatlogComponent,
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    // declarations : [CatlogComponent, UserComponent]
})
export class CatlogRoutingModule { }
