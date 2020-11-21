import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../services/user.service';
import User from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersList;
  currentUser: User = new User();
  user: string;
  password: string;
  constructor(private authService: AuthService, private userService: UserService) { }
  ngOnInit(): void {
    this.user = '';
    this.password = '';
  }
  addUserToDb(user): void {
    this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      const foundUser = data.filter(p => p.email === this.currentUser.email)
      for (let entry of foundUser){
        console.log(entry);
        this.userService.delete(entry.uid);
      }
      //this.userService.create(this.currentUser);
    });
  }
  tryLogin(){
    this.authService.doLogin(this.user, this.password)
      .then(res =>{
          this.currentUser.displayName = res.user.displayName;
          this.currentUser.email = res.user.email;
          this.currentUser.emailVerified = res.user.emailVerified;
          this.currentUser.uid = res.user.uid;
          this.addUserToDb(this.currentUser);
          console.log(res);
      }, err =>{
          console.log(err);
      });
  }

}



