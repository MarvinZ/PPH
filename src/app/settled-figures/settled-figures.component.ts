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
  selector: 'app-settled-figures',
  templateUrl: './settled-figures.component.html',
  styleUrls: ['./settled-figures.component.css']
})
export class SettledFiguresComponent extends Localization implements OnInit {
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
    let t1 = performance.now();
    this.toastr.error('This query took ' + (t1 - t0) + ' milliseconds..', 'Method not implemented!');

    // this.affiliateService.GetWeeklyTransactions(this.auth.currentUser.id, this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day)
    //   .subscribe(response => {
    //     this.response = response;
    //     this.loading = false;

    //     console.log(this.response);
    //     let t1 = performance.now();
    //     this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
    //   },
    //   error => this.errorMessage = <any>error);
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
    console.log(res);

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

