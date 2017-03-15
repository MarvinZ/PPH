import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReportResponse } from './../models/api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class AffiliateService {
  StatsObject: any
  _url: string = "http://panmora.com/twapi/api/temp/"
  constructor(private _http: Http) { }

  // GET api/temp/AffiliateLogin?agent={agent}&password={password}
  AffiliateLogin(username: string, password: string): Observable<any> {
    return this._http.get(this._url + "AffiliateLogin?agent=" + username + "&password=" + password)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }


  // GET api/temp/GetAffStatistics?idAgent={idAgent}&reportdate={reportdate}
  GetAffStatistics(idAgent: number, reportDate: string): Observable<any> {
    return this._http.get(this._url + "GetAffStatistics?idAgent=" + idAgent + "&reportdate=" + reportDate)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetWeeklyTransactions?idAgent={idAgent}&reportdate={reportdate}
  GetWeeklyTransactions(idAgent: number, reportDate: string): Observable<any> {
    console.log(this._url + "GetWeeklyTransactions?idAgent=" + idAgent + "&reportDate=" + reportDate);
    return this._http.get(this._url + "GetWeeklyTransactions?idAgent=" + idAgent + "&reportDate=" + reportDate)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetMyAgents?idAgent={idAgent}
  GetMyAgents(idAgent: number): Observable<any> {
    return this._http.get(this._url + "GetMyAgents?idAgent=" + idAgent)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  //POST api/temp/InsertPreAffiliate

  InsertPreAffiliate(FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
    Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let payload = {
      "Id": null,
      "FirstName": FirstName,
      "LastName": LastName,
      "Email": Email,
      "CountryName": CountryName,
      "CountryDialCode": CountryDialCode,
      "Address1": Address1,
      "Address2": Address2,
      "Phone": Phone,
      "City": City,
      "ZipCode": ZipCode,
      "BusinessName": BusinessName,
      "LanguageId": LanguageId,
      "AgentName": AgentName,
      "AgentPassword": AgentPassword
    }

    return this._http.post(this._url + "InsertPreAffiliate", payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }

  //TO do

  //GET api/temp/GetPreaffiliates
  GetPreaffiliates(): Observable<any> {
    return this._http.get(this._url + "GetPreaffiliates")
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  //POST api/temp/CreateAgents

  // TO do

  // GET api/temp/GetAllAffiliates
  GetAllAffiliates(): Observable<any> {
    return this._http.get(this._url + "GetAllAffiliates")
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentExposureReport?idagent={idagent}&sport={sport}&idCurrency={idCurrency}
  GetAgentExposureReport(idAgent: number, sport: string, idCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetAgentExposureReport?idAgent=" + idAgent + "&sport=" + sport + "&idCurrency=")
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentExposureReportDetail?idagent={idagent}&idgame={idgame}&wagerType={wagerType}&play={play}
  GetAgentExposureReportDetail(idAgent: number, idgame: string, wagerType: string, play: string): Observable<any> {
    return this._http.get(this._url + "GetAgentExposureReportDetail?idAgent=" + idAgent + "&idgame=" + idgame + "&wagerType=" + wagerType + "&play=" + play)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentPositionReport?idagent={idagent}&prmShowFutures={prmShowFutures}&dateInit={dateInit}&dateEnd={dateEnd}
  GetAgentPositionReport(idAgent: number, prmShowFutures: Boolean, dateInit: string, dateEnd: string): Observable<any> {
    return this._http.get(this._url + "GetAgentPositionReport?idAgent=" + idAgent + "&prmShowFutures=" + prmShowFutures + "&dateInit=" + dateInit + "&dateEnd=" + dateEnd)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentComission?prmIdAgent={prmIdAgent}&prmIdSubAgent={prmIdSubAgent}&prmInitialDate={prmInitialDate}&prmIdCurrency={prmIdCurrency}
  GetAgentComission(prmIdAgent: number, prmIdSubAgent: number, prmInitialDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetAgentComission?prmIdAgent=" + prmIdAgent + "&prmIdSubAgent=" + prmIdSubAgent + "&prmInitialDate=" + prmInitialDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetPlayerStandings?prmIdAgent={prmIdAgent}&prmInitialDate={prmInitialDate}&prmIdCurrency={prmIdCurrency}
  GetPlayerStandings(prmIdAgent: number, prmInitialDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetPlayerStandings?prmIdAgent=" + prmIdAgent + "&prmInitialDate=" + prmInitialDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetActionsByPlayer?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmEndDate={prmEndDate}&prmIdCurrency={prmIdCurrency}
  GetActionsByPlayer(prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetActionsByPlayer?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetPlayerTotalsReport?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmEndDate={prmEndDate}&prmIdCurrency={prmIdCurrency}
  GetPlayerTotalsReport(prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetPlayerTotalsReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetWeeklyBalanceReport?prmIsDistributor={prmIsDistributor}&prmTransactionType={prmTransactionType}&prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmIdCurrency={prmIdCurrency}
  GetWeeklyBalanceReport(prmIsDistributor: string, prmTransactionType: string, prmIdAgent: number, prmStartDate: string, prmIdCurrency: string): Observable<any> {
    console.log(this._url + "GetWeeklyBalanceReport?prmIsDistributor=" + prmIsDistributor + "&prmTransactionType=" + prmTransactionType + "&prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency);
    return this._http.get(this._url + "GetWeeklyBalanceReport?prmIsDistributor=" + prmIsDistributor + "&prmTransactionType=" + prmTransactionType + "&prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetCashFlowReport?prmTransType={prmTransType}&prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmEndDate={prmEndDate}&prmIdCurrency={prmIdCurrency}
  GetCashFlowReport(prmTransType: number, prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetCashFlowReport?prmTransType=" + prmTransType + "&prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetGrossWeekReport?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmIdCurrency={prmIdCurrency}
  GetGrossWeekReport(prmIdAgent: number, prmStartDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetGrossWeekReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "1&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetWeeklyPaymentsReport?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmIdCurrency={prmIdCurrency}
  GetWeeklyPaymentsReport(prmIdAgent: number, prmStartDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetWeeklyPaymentsReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetThisWeekDateRange
  GetThisWeekDateRange(): Observable<any> {
    return this._http.get(this._url + "GetThisWeekDateRange")
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // POST api/temp/StartOfWeek?startOfWeek={startOfWeek}&reportDate={reportDate}

  // TO DO

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}




