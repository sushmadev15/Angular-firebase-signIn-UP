import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UserService {

    constructor(private htpp : HttpClient){

    }
    getUserList(){
        return this.htpp.get("./assets/data.json");
    }
}