import {TestBed, inject} from '@angular/core/testing';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Toast, ToastrService, ToastPackage, ToastrModule } from 'ngx-toastr';
import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

import { environment } from '../../../environments/environment';
const AngularFireMocks = {
    auth: of({ uid: 'ABC123' })
};


fdescribe('AuthService', () => {
    const email: string = 'email';
    const password: string = 'password';
    const authStub: any = {
    authState: {},
    auth: {
            signInWithEmailAndPassword() {
                return Promise.resolve();
            }
        },
    authUp: {
            createUserWithEmailAndPassword() {
                return Promise.resolve();
            }
        }
    };

    beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, 
            BrowserAnimationsModule, ToastrModule.forRoot(),
            AngularFireModule.initializeApp(environment.firebaseConfig, 'sample-angular-firebase'),],
    providers: [
    {provide: AngularFireAuth, useValue: authStub },
    {provide: AngularFirestore},
    AuthService
    ]
    });
    authStub.authState = of(null);
    });
    it('should call signInWithPasswordAndEmail', inject([AuthService], (service: AuthService) => {
        const mock = TestBed.get(AngularFireAuth);
        const spy = spyOn(authStub.auth, 'signInWithEmailAndPassword').and.callThrough();
        mock.auth = authStub.auth;
        service.SignIn(email, password);
        expect(spy).toHaveBeenCalledWith(email, password);
        }));
    
    it('should call signUpWithPasswordAndEmail', inject([AuthService], (service: AuthService) => {
        const mock = TestBed.get(AngularFireAuth);
        const spy = spyOn(authStub.authUp, 'createUserWithEmailAndPassword').and.callThrough();
        mock.auth = authStub.authUp;
        service.SignUp(email, password);
        expect(spy).toHaveBeenCalledWith(email, password);
        }));
    });

   

