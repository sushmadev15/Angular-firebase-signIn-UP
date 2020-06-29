import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../shared/services/auth.service";
import { Subscription } from 'rxjs';
import { UserService } from "../shared/services/user.service";

@Component({
  selector: 'app-catlog',
  templateUrl: './catlog.component.html',
  styleUrls: ['./catlog.component.css']
})
export class CatlogComponent implements OnInit {
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
