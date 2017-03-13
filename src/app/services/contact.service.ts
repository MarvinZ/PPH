import { Injectable } from '@angular/core'
import { IContact } from './../models/contact'
import { Router } from '@angular/router'

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ContactusResponse} from './../models/contact';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

  constructor (private router:Router, private http: Http) { }

  contact:IContact

  contactEmail(name: string, email: string, phone: number, message: string): Observable<ContactusResponse> {
    let url = 'http://panmora.com/twapi/api/Misc/SendContactUsEmail';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization':'Token 1e5feebf4d5e86c989f254870e935ce5'});
    let options = new RequestOptions({headers: headers});
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph"
      },
      "Name": name,
      "Email": email,
      "Phone": phone,
      "Message": message
    }

    return this.http.post(url, payload, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  }