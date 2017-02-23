import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Router } from '@angular/router'


@Injectable()
export class AuthService {

  constructor (private router:Router) { }
  currentUser:IUser
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Marv',
      lastName: 'Test'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
  
  logout() {
    this.currentUser = null;
    this.router.navigate(['home']);
  }

    singup(name:string, email:string, phone: string) {
    console.log(name, phone, email);
    this.router.navigate(['home']);
  }
}