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
  selector: 'app-gross-week',
  templateUrl: './gross-week.component.html',
  styleUrls: ['./gross-week.component.css']
})
export class GrossWeekComponent extends Localization implements OnInit {
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
  }

  go() {
    this.response = null;
    this.loading = true;

    let t0 = performance.now();
    //alert (this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day);
    this.affiliateService.GetGrossWeekReport(this.auth.currentUser.id,
      this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day,
      this.ddlCurrency)
      .subscribe(response => {
        this.response = response;
        this.loading = false;
        // console.log(this.response);
        let t1 = performance.now();
        // this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }
  getLineTotal(a: string, b: string, c: string) {
    return Number(a) + Number(b) + Number(c);

  }

  getLineTotalTotal(z: string, a: string, b: string, c: string) {
    return Number(z) - Number(a) + Number(b) + Number(c);

  }

  getTotal(Item: any, cat: string) {
    let result = 0;
    //  // console.log(Item);
    if (Item.PlayerList.length > 0) {
      for (let entry of Item.PlayerList) {
        if (cat === '_balfwd')
          result = result + Number(entry._balfwd);
        if (cat === '_casinoweek')
          result = result + Number(entry._casinoweek);
        if (cat === '_horsesweek')
          result = result + Number(entry._horsesweek);
        if (cat === '_pmts')
          result = result + Number(entry._pmts);
        if (cat === '_allweek')
          result = result + Number(entry._sportsweek) + Number(entry._horsesweek) + Number(entry._casinoweek);
        // // console.log(entry);
      }
    }
    return result;
  }

  getTotalTotal(Item: any, cat: string) {
    let result = 0;
    //  // console.log(Item);
    if (Item.PlayerList.length > 0) {
      for (let entry of Item.PlayerList) {
        if (cat === '_balfwd')
          result = result + Number(entry._balfwd);
        if (cat === '_casinoweek')
          result = result + Number(entry._casinoweek);
        if (cat === '_horsesweek')
          result = result + Number(entry._horsesweek);
        if (cat === '_pmts')
          result = result + Number(entry._pmts);
        if (cat === '_allweek')
          result = result + Number(entry._balfwd) - Number(entry._sportsweek) + Number(entry._horsesweek) + Number(entry._casinoweek);
        // // console.log(entry);
      }
    }
    return result;
  }

  ExportToExcel() {
    let res = []

    for (let agent of this.response.AgentList) {
      if (agent.PlayerList) {
        for (let player of agent.PlayerList) {
          res.push(player);
        }
      }
    }
    // console.log(res);

    try {
      var options = {
        showLabels: true
      };
      var displayDate = '-D:' + new Date().toLocaleDateString() + 'T:' + new Date().toLocaleTimeString();

      new Angular2Csv(res, 'GrossWeek' + displayDate, options);
    } catch (error) {
      alert(error);
    }
  }



}  //end of class

