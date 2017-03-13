import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { ReportService } from './../services/report.service'
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  //private dateModel: any
  loading: boolean = false;

  // ddlSports :string
  ddlTransType: string = '-1'
  ddlCurrency: string = '1'

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
  // 	{ value: 'ALL', display: 'ALL' }
  // ];

  public currencies = [
    { value: '1', display: 'USD' },
    { value: '2', display: 'MXN' },
    { value: '3', display: 'GBP' },
    { value: '4', display: 'EUR' }
  ];

  public transactionTypes = [
    { value: '-1', display: 'All' },
    { value: '0', display: 'Sports' },
    { value: '1', display: 'Casino' },
    { value: '2', display: 'Racing' }
  ];
  private dateModel: any
  response: any
  errorMessage: string

  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, public vcr: ViewContainerRef,
    public locale: LocaleService, public translation: TranslationService, private auth: AuthService) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
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
    this.loading = true;
    let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;
    let t0 = performance.now();
    this.affiliateService.GetCashFlowReport(1, this.auth.currentUser.id, startDate, endDate, this.ddlCurrency)
      .subscribe(response => {
        this.response = response;
        this.loading = false;
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }
}