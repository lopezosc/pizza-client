import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import User from '../models/User';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  newUser: User = new User();
  userData: any;

  constructor(public  afAuth: AngularFireAuth, public  router: Router, private userService: UserService) {

    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  // Login email / password
  doLogin(email, password){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(res =>{
            resolve(res);
        }, err => reject(err));
      });
  }

 

}
