import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReportResponse } from './../models/api';
import { Banner } from './../models/banner';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppSettings } from '../app-settings';



@Injectable()
export class AffiliateService {
  StatsObject: any
  _url: string = AppSettings.API_ENDPOINT + 'temp/';

  _url2: string = AppSettings.API_ENDPOINT + 'AgentReports/';

  _url3: string = AppSettings.API_ENDPOINT + 'AfsBanner/';


  constructor(private _http: Http) { }

  // GET api/temp/AffiliateLogin?agent={agent}&password={password}
  AffiliateLogin(username: string, password: string): Observable<any> {
    return this._http.get(this._url + "AffiliateLogin?agent=" + username + "&password=" + password)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }


  // GET api/temp/GetAffStatistics?idAgent={idAgent}&reportdate={reportdate}
  GetAffStatistics(idAgent: number, reportDate: string): Observable<any> {
    return this._http.get(this._url + "GetAffStatistics?idAgent=" + idAgent + "&reportdate=" + reportDate)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetWeeklyTransactions?idAgent={idAgent}&reportdate={reportdate}
  GetWeeklyTransactions(idAgent: number, reportDate: string): Observable<any> {
    // console.log(this._url + "GetWeeklyTransactions?idAgent=" + idAgent + "&reportDate=" + reportDate);
    return this._http.get(this._url + "GetWeeklyTransactions?idAgent=" + idAgent + "&reportDate=" + reportDate)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetMyAgents?idAgent={idAgent}
  GetMyAgents(idAgent: number): Observable<any> {
    return this._http.get(this._url + "GetMyAgents?idAgent=" + idAgent)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  //POST api/temp/InsertPreAffiliate

  InsertPreAffiliate(FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
    Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string,
    IdBook: string): Observable<any> {
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
      "AgentPassword": AgentPassword,
      "IdBook": IdBook
    }

    // console.log(payload);

    return this._http.post(this._url + "InsertPreAffiliate", payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }



  //POST api/temp/InsertPreAffiliate

  RejectPreAffiliate(id: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let payload = {
      "Id": id,
      "FirstName": '',
      "LastName": '',
      "Email": '',
      "CountryName": '',
      "CountryDialCode": '',
      "Address1": '',
      "Address2": '',
      "Phone": '',
      "City": '',
      "ZipCode": '',
      "BusinessName": '',
      "LanguageId": '',
      "AgentName": '',
      "AgentPassword": '',
      "IdBook": ''
    }

    // console.log(payload);

    return this._http.post(this._url + "RejectPreAffiliate", payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }
  //GET api/temp/GetPreaffiliates
  GetPreaffiliates(): Observable<any> {
    return this._http.get(this._url + "GetPreaffiliates")
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  //POST api/temp/CreateAgents
  CreateAgents(FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
    Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string,
    IdBook: string, preAffiliateId: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let payload = {
      "Id": preAffiliateId,
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
      "AgentPassword": AgentPassword,
      "IdBook": IdBook
    }
    // console.log(payload);

    return this._http.post(this._url + "CreateAgents", payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }

 CreateSubAgent(FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
    Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string,
    IdBook: string, preAffiliateId: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let payload = {
      "Id": preAffiliateId, //this will be the agent id
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
      "AgentPassword": AgentPassword,
      "IdBook": IdBook
    }
    // console.log(payload);

    return this._http.post(this._url + "CreateSubAgent", payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }

  // GET api/temp/GetAllAffiliates
  GetAllAffiliates(): Observable<any> {
    return this._http.get(this._url + "GetAllAffiliates")
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentExposureReport?idagent={idagent}&sport={sport}&idCurrency={idCurrency}
  GetAgentExposureReport(idAgent: number, sport: string, idCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetAgentExposureReport?idAgent=" + idAgent + "&sport=" + sport + "&idCurrency=")
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentExposureReportDetail?idagent={idagent}&idgame={idgame}&wagerType={wagerType}&play={play}
  GetAgentExposureReportDetail(idAgent: number, idgame: string, wagerType: string, play: string): Observable<any> {
    return this._http.get(this._url + "GetAgentExposureReportDetail?idAgent=" + idAgent + "&idgame=" + idgame + "&wagerType=" + wagerType + "&play=" + play)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentPositionReport?idagent={idagent}&prmShowFutures={prmShowFutures}&dateInit={dateInit}&dateEnd={dateEnd}
  GetAgentPositionReport(idAgent: number, prmShowFutures: Boolean, dateInit: string, dateEnd: string): Observable<any> {
    return this._http.get(this._url + "GetAgentPositionReport?idAgent=" + idAgent + "&prmShowFutures=" + prmShowFutures + "&dateInit=" + dateInit + "&dateEnd=" + dateEnd)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetAgentComission?prmIdAgent={prmIdAgent}&prmIdSubAgent={prmIdSubAgent}&prmInitialDate={prmInitialDate}&prmIdCurrency={prmIdCurrency}
  GetAgentComission(prmIdAgent: number, prmIdSubAgent: number, prmInitialDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetAgentComission?prmIdAgent=" + prmIdAgent + "&prmIdSubAgent=" + prmIdSubAgent + "&prmInitialDate=" + prmInitialDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetPlayerStandings?prmIdAgent={prmIdAgent}&prmInitialDate={prmInitialDate}&prmIdCurrency={prmIdCurrency}
  GetPlayerStandings(prmIdAgent: number, prmInitialDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetPlayerStandings?prmIdAgent=" + prmIdAgent + "&prmInitialDate=" + prmInitialDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetActionsByPlayer?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmEndDate={prmEndDate}&prmIdCurrency={prmIdCurrency}
  GetActionsByPlayer(prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetActionsByPlayer?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetPlayerTotalsReport?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmEndDate={prmEndDate}&prmIdCurrency={prmIdCurrency}
  GetPlayerTotalsReport(prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    // console.log(this._url + "GetPlayerTotalsReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency);
    return this._http.get(this._url + "GetPlayerTotalsReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetWeeklyBalanceReport?prmIsDistributor={prmIsDistributor}&prmTransactionType={prmTransactionType}&prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmIdCurrency={prmIdCurrency}
  GetWeeklyBalanceReport(prmIsDistributor: string, prmTransactionType: string, prmIdAgent: number, prmStartDate: string, prmIdCurrency: string): Observable<any> {
    // console.log(this._url + "GetWeeklyBalanceReport?prmIsDistributor=" + prmIsDistributor + "&prmTransactionType=" + prmTransactionType + "&prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency);
    return this._http.get(this._url + "GetWeeklyBalanceReport?prmIsDistributor=" + prmIsDistributor + "&prmTransactionType=" + prmTransactionType + "&prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetCashFlowReport?prmTransType={prmTransType}&prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmEndDate={prmEndDate}&prmIdCurrency={prmIdCurrency}
  GetCashFlowReport(prmTransType: string, prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetCashFlowReport?prmTransType=" + prmTransType + "&prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmEndDate=" + prmEndDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetGrossWeekReport?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmIdCurrency={prmIdCurrency}
  GetGrossWeekReport(prmIdAgent: number, prmStartDate: string, prmIdCurrency: string): Observable<any> {
    // console.log(this._url + "GetGrossWeekReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "1&prmIdCurrency=" + prmIdCurrency);
    return this._http.get(this._url + "GetGrossWeekReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetWeeklyPaymentsReport?prmIdAgent={prmIdAgent}&prmStartDate={prmStartDate}&prmIdCurrency={prmIdCurrency}
  GetWeeklyPaymentsReport(prmIdAgent: number, prmStartDate: string, prmIdCurrency: string): Observable<any> {
    return this._http.get(this._url + "GetWeeklyPaymentsReport?prmIdAgent=" + prmIdAgent + "&prmStartDate=" + prmStartDate + "&prmIdCurrency=" + prmIdCurrency)
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // GET api/temp/GetThisWeekDateRange
  GetThisWeekDateRange(): Observable<any> {
    return this._http.get(this._url + "GetThisWeekDateRange")
      .map((response: Response) => <any>response.json())
      .do(data =>  console.log('All: ' + JSON.stringify(data)))
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

  //POST api/temp/InsertPreAffiliate

  GetWebvsPhoneReport(IdAgent: number, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentWebVsPhone', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetSettledFiguresReport(IdAgent: number, StartDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "IdAgent": IdAgent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentSettledFigure', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }



  GetAgentdistributionReport(Agent: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },

      "Agent": Agent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentDistribution', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetagentHistoryReport(IdAgent: number, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent,
      "Filter": 1 //?????
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentHistory', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetAgentAdjustmentReport(IdAgent: number, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_ReportAgentPlayerAdjustment', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetdepositsAndwithdrawalsReport(IdAgent: number, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentDepositsAndWithdrawals', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetAgentHoldPercentReport(IdAgent: number, StartDate: string, EndDate: string, IdPlayer: number): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent,
      "IdPlayer": IdPlayer,
      "ViewDetail": true
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentHoldPercent', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetMonthlysummaryReport(agent: string, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "Agent": agent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentMonthlySummary', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetAccessLogReport(IdAgent: number, StartDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "IdAgent": IdAgent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentAccessLog', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetAgentCardReport(IdAgent: number, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentCardTransaction', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetBeatTheLineReport(IdAgent: number, StartDate: string, EndDate: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": StartDate,
      "EndDate": EndDate,
      "IdAgent": IdAgent,
      "BeatOnly": true,
      "IdPlayer": 999
    }
    // console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentBeatTheLine', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  //banners
  AddBanner(banner: Banner): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": banner.BannerCode,
      "IdBook": banner.IdBook,
      "SportId": banner.SportId,
      "BannerType": banner.BannerType,
      "LanguageId": banner.IdLanguage,
      "ImageUrl": banner.ImageUrl,
      "TargetUrl": banner.TargetUrl,
      "Description": banner.BannerDescription,
      "Width": banner.Width,
      "Height": banner.Height
    }
    // console.log(payload);

    return this._http.post(this._url3 + 'AddBanner', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }



  AddBannerClick(BannerCode: string, AffiliateCode: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode
    }
    // console.log(payload);

    return this._http.post(this._url3 + 'AddBannerClick', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetAllBannersWithStatisticsByAffiliate(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode, //'469ED6',
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetAllBannersWithStatisticsByAffiliate', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetAllBannersWithStatisticsByBanner(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetAllBannersWithStatisticsByBanner', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetAllBannersWithStatistics(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetAllBannersWithStatistics', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetBannerInfoByBook(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetBannerInfoByBook', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetBannerInfoByBannerCode(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetBannerInfoByBannerCode', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetMarketingStats(Agent: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": '',
      "AffiliateCode": '',
      "book": '',
      "idbook": '',
      "Distributor": '',
      "Agent": Agent

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetMarketingStats', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetLastVisits(AffiliateCode: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": '',
      "AffiliateCode": AffiliateCode,
      "book": '',
      "idbook": '',
      "Distributor": '',
      "Agent": AffiliateCode


    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetLastVisits', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

 GetStatsLast7Days(AffiliateCode: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": '',
      "AffiliateCode": AffiliateCode,
      "book": '',
      "idbook": '',
      "Distributor": '',
      "Agent": AffiliateCode


    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetStatsLast7Days', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetDistributorAgentsAndPlayersDetails(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetDistributorAgentsAndPlayersDetails', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }




  GetDistributorAgentsAndPlayers(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetDistributorAgentsAndPlayers', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetAgentPlayersWithDetails(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetAgentPlayersWithDetails', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  GetAgentPlayer(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetAgentPlayer', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  GetAgenthierarchy(BannerCode: string, AffiliateCode: string, book: string, idbook: number, Distributor: string, Agent: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "BannerCode": BannerCode,
      "AffiliateCode": AffiliateCode,
      "book": book,
      "idbook": idbook,
      "Distributor": Distributor,
      "Agent": Agent

    }
    // console.log(payload);

    return this._http.post(this._url3 + 'GetAgenthierarchy', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

GetAgentPlayerHistory(prmIdAgent: number, prmStartDate: string, prmEndDate: string, prmIdCurrency: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token 1e5feebf4d5e86c989f254870e935ce5' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let payload = {
      "RequestHeader": {
        "IdSite": 11,
        "DomainName": "pph",
      },
      "StartDate": prmStartDate,//'2017/01/01',
      "EndDate": prmEndDate,//'2017/01/08',
      "IdAgent": prmIdAgent,
      "ThisWeek": false,
      "IdPlayer": -1,
      "IdCurrency": 1

    }
     console.log(payload);

    return this._http.post(this._url2 + 'Report_AgentPlayerHistory', payload, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}






