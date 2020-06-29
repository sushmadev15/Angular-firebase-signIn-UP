import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './sign-routing.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SigninRoutingModule,
    ],
    providers: [],
    declarations: [SignInComponent]
})
export class SigninModule {
}
