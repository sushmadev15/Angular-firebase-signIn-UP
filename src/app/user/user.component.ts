import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../shared/services/auth.service";
import { Subscription } from 'rxjs';
import { UserService } from "../shared/services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dispaly = true;

  userData: any;
  dataSubscription: Subscription;

  constructor(public authService: AuthService,public router: Router,public userService: UserService) { }

  ngOnInit() {
    this.dataSubscription =  this.userService.getUserList().subscribe(data => {
      this.userData = data;
     })
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe()
  }

  getDashboardPage(){
    this.router.navigate(['dashboard']);
  }
}
