import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Router } from '@angular/router'

// Imports

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoginResponse } from './../models/api';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppSettings } from '../app-settings';



@Injectable()
export class AuthService {



  constructor(private router: Router, private http: Http) { }
  currentUser: IUser
  siteName: string = AppSettings.SITE;  //'Affiliates'//'PPH', 'Admin', 'Affiliates', 'Agent'

  viewingAs: string = ''

  loginUser(userName: string, password: string): Observable<LoginResponse> {

    let url = AppSettings.API_ENDPOINT + '/Agent/LoginPPh';
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "Agent": userName, // "VHEDDIE",
      "Password": password // "TRUMP2021"
    }

    return this.http.post(url, payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  ///////////site configuration Admin, affiliate, PPH //////////////////////
  isAdminSite() {
    return this.siteName === 'Admin';
  }

  isAffiliateSite() {
    return this.siteName === 'Affiliates';
  }

  isPPHSite() {
    return this.siteName === 'PPH';
  }
  ////////////////////////////
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['home']);
  }


  public viewAs(idAgent: number) {
    this.currentUser.selectedSubagent = idAgent;
    this.currentUser.id = idAgent;
  }

  public stopViewingAs() {
    this.currentUser.selectedSubagent = 0;
    this.currentUser.id = this.currentUser.originalId;
    this.viewingAs = '';
    this.router.navigate(['myAgents']);


  }


  singup(name: string, email: string, phone: string): any {
    console.log(name, phone, email);
    return {
      'result': 'success',
      'msg': 'succesful registration'
    }
  }
}