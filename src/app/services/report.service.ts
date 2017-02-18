import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import { IPlayer } from './../models/player';   // Import the type of object you are expecting
@Injectable()
export class ReportService {
      private _thingUrl = 'http://localhost:29328/api/Reports';// running in other project, or just use the one in the api folder.
      //headers


  constructor(private _http: Http) { }

      getPlayerNumbers(): Observable<IPlayer[]> {
        return this._http.get(this._thingUrl)
            .map((response: Response) => <IPlayer[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    // getThing(id: number): Observable<IThing> {
    //     return this.getThings()
    //         .map((_thingUrl: IThing[]) => _thingUrl.find(p => p.thingId === id));
    // }

   private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
