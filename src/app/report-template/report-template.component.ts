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
  selector: 'app-report-template',
  templateUrl: './report-template.component.html',
  styleUrls: ['./report-template.component.css']
})
export class ReportTemplateComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: boolean = false;
  Showfutures: Boolean = false;

  // ddlSports :string = 'NFL'
  // ddlTransType: string = '-1'
  // ddlCurrency: string = '1'

  // public sports  = [
  // 	{ value: 'NFL', display: 'NFL' },
  // 	{ value: 'MU', display: 'MU' },
  // 	{ value: 'MLB', display: 'MLB' },
  // 	{ value: 'CBB', display: 'CBB' },
  // 	{ value: 'CFB', display: 'CFB' },
  // 	{ value: 'PROP', display: 'PROP' },
  // 	{ value: 'CBB', display: 'CBB' },
  // 	{ value: 'NBA', display: 'NBA' },
  // 	{ value: 'SOC', display: 'SOC' },
  // 	{ value: 'TNT', display: 'TNT' },
  // 	{ value: 'NHL', display: 'NHL' },
  // 	{ value: 'All', display: 'ALL' }
  // ];

  // public currencies = [
  // 	{ value: '1', display: 'USD' },
  // 	{ value: '2', display: 'MXN' },
  // 	{ value: '3', display: 'GBP' },
  // 	{ value: '4', display: 'EUR' }
  // ];

  // public transactionTypes = [
  // 	{ value: '-1', display: 'All' },
  // 	{ value: '0', display: 'Sports' },
  // 	{ value: '1', display: 'Casino' },
  // 	{ value: '2', display: 'Racing' }
  // ];

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

    //  let currentDateStart = new Date();
    // currentDateStart.setDate(currentDateStart.getDate() - 7);

    // let day2 = currentDateStart.getDate();
    // let month2 = currentDateStart.getMonth() + 1;
    // let year2 = currentDateStart.getFullYear();

    // this.dateModel = {
    //   beginDate: { year: year2, month: month2, day: day2 },
    //   endDate: { year: year, month: month, day: day }
    // };

  }

  go() {
    this.response = null;
    this.loading = true;
    //  let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    // let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;

    let t0 = performance.now();
    this.affiliateService.GetWeeklyTransactions(this.auth.currentUser.id, this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day)
      .subscribe(response => {
        this.response = response;
        this.loading = false;

        console.log(this.response);
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }

  ExportToExcel() {
    console.log(this.response.CashFlowList);
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

  parceFrac(frac: string) {

    if (frac.includes("frac")) {

      if (frac.includes("&frac12;")) {
        return frac.replace("&frac12;", " 1/2 ");
      }
      else if (frac.includes("&frac13;")) {
        return frac.replace("&frac13;", " 1/3 ");
      }
      else if (frac.includes("&frac14;")) {
        return frac.replace("&frac14;", " 1/4 ");
      }
      else if (frac.includes("&frac15;")) {
        return frac.replace("&frac15;", " 1/5 ");
      }
      else if (frac.includes("&frac16;")) {
        return frac.replace("&frac16;", " 1/6 ");
      }
      else if (frac.includes("&frac17;")) {
        return frac.replace("&frac17;", " 1/7 ");
      }
      else if (frac.includes("&frac18;")) {
        return frac.replace("&frac18;", " 1/8 ");
      }
      else if (frac.includes("&frac19;")) {
        return frac.replace("&frac19;", " 1/9 ");
      }
      else
        return frac;

    } else
      return frac;
  }



}  //end of class

