import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { Angular2Csv } from 'angular2-csv/angular2-csv';

@Component({
  selector: 'app-web-vs-phone',
  templateUrl: './web-vs-phone.component.html',
  styleUrls: ['./web-vs-phone.component.css']
})
export class WebVsPhoneComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: boolean = false;
  Showfutures: Boolean = false;


  ddlCurrency: string = '1'

  public currencies = [
    { value: '1', display: 'USD' },
    { value: '2', display: 'MXN' },
    { value: '3', display: 'GBP' },
    { value: '4', display: 'EUR' }
  ];


  response: any
  totals: any
  errorMessage: string
  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, private router: Router,
    public vcr: ViewContainerRef, public locale: LocaleService,
    public translation: TranslationService, private auth: AuthService) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    if (!this.auth.currentUser) {
      this.router.navigate(['/user/login']);
    }
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    let currentDateStart = new Date();
    currentDateStart.setDate(currentDateStart.getDate() - 7);

    let day2 = currentDateStart.getDate();
    let month2 = currentDateStart.getMonth() + 1;
    let year2 = currentDateStart.getFullYear();

    this.dateModel = {
      beginDate: { year: year2, month: month2, day: day2 },
      endDate: { year: year, month: month, day: day }
    };

  }



  go() {
    this.response = null;
    this.loading = true;
    let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;

    let t0 = performance.now();
    let t1 = performance.now();
    //   this.toastr.error('Not implemented', 'Error!');
    this.affiliateService.GetWebvsPhoneReport(this.auth.currentUser.id, startDate, endDate)
      .subscribe(response => {
        this.response = response;
        this.totals = this.calculateTotals(response);
        this.loading = false;

        // console.log(this.response);
        let t1 = performance.now();
        // this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }

  ExportToExcel() {
    // console.log(this.response);
    try {
      var options = {
        showLabels: true
      };
      var displayDate = '-D:' + new Date().toLocaleDateString() + 'T:' + new Date().toLocaleTimeString();

      new Angular2Csv(this.response.CashFlowList, 'WeeklyBalances' + displayDate, options);
    } catch (error) {
      alert(error);
    }
  }

  calculateTotals(data) {
    let PhoneVol = 0;
    let PhoneBets = 0;


    let PhonePlayers = 0;
    let OnLineVolume = 0;
    let OnLineBets = 0;
    let OnLinePlayers = 0;
    let CasinoVolume = 0;
    let CasinoBets = 0;
    let CasinoPlayers = 0;

    for (let entry of data) {

      PhonePlayers += entry.PhonePlayers;
      OnLineVolume += entry.OnLineVolume;
      OnLineBets += entry.OnLineBets;
      OnLinePlayers += entry.OnLinePlayers;
      CasinoVolume += entry.CasinoVolume;
      CasinoBets += entry.CasinoBets;
      CasinoPlayers += entry.CasinoPlayers;

      // // console.log(entry); // 1, "string", false
    }

    return {
      PhoneVol: PhoneVol,
      PhoneBets: PhoneBets,
      PhonePlayers: PhonePlayers,
      OnLineVolume: OnLineVolume,
      OnLineBets: OnLineBets,
      OnLinePlayers: OnLinePlayers,
      CasinoVolume: CasinoVolume,
      CasinoBets: CasinoBets,
      CasinoPlayers: CasinoPlayers
    };
  }




}  //end of class

