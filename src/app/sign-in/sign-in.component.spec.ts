import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInComponent } from './sign-in.component';
import { AuthService } from "../shared/services/auth.service";
describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  let authService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SignInComponent ],
      providers: [AuthService]
    });
    inject([AuthService], (service: AuthService) => {
      authService = service;
    })();
  }));

  

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SignInComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should create the Sign Up', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
