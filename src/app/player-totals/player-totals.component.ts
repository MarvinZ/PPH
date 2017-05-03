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
  selector: 'app-player-totals',
  templateUrl: './player-totals.component.html',
  styleUrls: ['./player-totals.component.css']
})
export class PlayerTotalsComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: boolean = false;
  ddlCurrency: string = '1'

  public currencies = [
    { value: '1', display: 'USD' },
    { value: '2', display: 'MXN' },
    { value: '3', display: 'GBP' },
    { value: '4', display: 'EUR' }
  ];

  response: any
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
    this.dateModel = { date: { year: year, month: month, day: day } };

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
    this.affiliateService.GetPlayerTotalsReport(this.auth.currentUser.id,
      startDate, endDate, this.ddlCurrency)
      .subscribe(response => {
        this.response = response;
        this.loading = false;

        console.log(this.response);
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }

  getTotal(Item: any, cat: string) {
    let result = 0;
    //  console.log(Item);
    if (Item.PlayerList.length > 0) {
      for (let entry of Item.PlayerList) {
        if (cat === '_totalriskopen')
          result = result + Number(entry._totalriskopen);
        if (cat === '_totalriskgraded')
          result = result + Number(entry._totalriskgraded);
        if (cat === '_win')
          result = result + Number(entry._win);
        if (cat === '_lose')
          result = result + Number(entry._lose);
        if (cat === '_net')
          result = result + Number(entry._net);
        if (cat === '_allweek')
          result = result + Number(entry._sportsweek) + Number(entry._horsesweek) + Number(entry._casinoweek);
        // console.log(entry);
      }
    }
    return result;
  }


} //end of class
