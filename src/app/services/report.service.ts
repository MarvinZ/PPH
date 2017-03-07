import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReportResponse } from './../models/api';
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
            .map((response: Response) => <IPlayer[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // getThing(id: number): Observable<IThing> {
    //     return this.getThings()
    //         .map((_thingUrl: IThing[]) => _thingUrl.find(p => p.thingId === id));
    // }



    // Add a new comment
    GetAgentExposureReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetAgentExposureReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "sample string 2",
            "PrmSport": "sample string 3",
            "PrmIdCurrency": 1,
            "PrmIdGame": 1,
            "PrmWagerType": "sample string 6",
            "PrmPlay": "sample string 7",
            "PrmShowFeatures": true,
            "PrmIdSubAgent": 1,
            "PrmIsDistribuitor": "sample string 10",
            "PrmTransactionType": 1,
            "PrmDateInit": "sample string 12",
            "PrmDateEnd": "sample string 13"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }



    // Add a new comment
    GetAgentExposureReportDetail(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetAgentExposureReportDetail';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    GetAgentPositionReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetAgentPositionReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    GetAgentComission(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetAgentComission';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    GetPlayerStandings(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetPlayerStandings';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    GetActionsByPlayer(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetPlayerStandings';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }



    GetPlayerTotalsReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetPlayerTotalsReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }




    GetWeeklyBalanceReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetWeeklyBalanceReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    GetCashFlowReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetCashFlowReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }



    GetGrossWeekReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetGrossWeekReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    GetWeeklyPaymentsReport(idAgent: number): Observable<ReportResponse> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://panmora.com/api/AgentReports/GetWeeklyPaymentsReport';
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let payload = {
            "RequestHeader": {
                "IdSite": 11,
                "DomainName": "pph",
            },
            "PrmIdAgent": idAgent,
            "PrmAgent": "",
            "PrmSport": "",
            "PrmIdCurrency": 1,
            "PrmIdGame": null,
            "PrmWagerType": "",
            "PrmPlay": "",
            "PrmShowFeatures": null,
            "PrmIdSubAgent": null,
            "PrmIsDistribuitor": "",
            "PrmTransactionType": 1,
            "PrmDateInit": "3/1/2017",
            "PrmDateEnd": "3/7/2017"
        }

        return this._http.post(url, payload, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
