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
  totals: totalObject[] = []
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
    let startDate = this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day;

    let t0 = performance.now();
    let t1 = performance.now();
    this.affiliateService.GetSettledFiguresReport(this.auth.currentUser.id, startDate)
      .subscribe(response => {
        this.response = response;
        this.totals = this.calculateTotals(response);
        this.loading = false;

        console.log(this.response);
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }


  calculateTotals(data) {

    let result: totalObject[] = []
    for (let entry of data) {
      let Pmts = 0;
      let CurrentBalance = 0;
      let TotalWeek = 0;
      let SettledFigure = 0;
      for (let player of entry.DetailList) {
        Pmts += +player.Pmts;
        CurrentBalance = CurrentBalance + +player.CurrentBalance;
        TotalWeek += +player.TotalWeek;
        SettledFigure += +player.SettledFigure;
      }
      let newAgent = new totalObject();
      newAgent = {
        Agent: entry.Agent,
        Pmts: Pmts,
        CurrentBalance: CurrentBalance,
        TotalWeek: TotalWeek,
        SettledFigure: SettledFigure
      }
      result.push(newAgent)

      // console.log(result); // 1, "string", false
    }

    return result;
  }


   getTotalCurrentBalance(agent: string) {
    return this.totals.find(e => e.Agent == agent).CurrentBalance;
  }
  getTotalTotalWeek(agent: string) {
    return this.totals.find(e => e.Agent == agent).TotalWeek;
  }
  getTotalPmts(agent: string) {
    return this.totals.find(e => e.Agent == agent).Pmts;
  }
  getTotalSettledFigure(agent: string) {
    return this.totals.find(e => e.Agent == agent).SettledFigure;
  }
  ExportToExcel() {
    let res = []

    for (let agent of this.response) {
      if (agent.DetailList) {
        for (let player of agent.DetailList) {
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

      new Angular2Csv(res, 'Settled Figures' + displayDate, options);
    } catch (error) {
      alert(error);
    }
  }


}  //end of class

export class totalObject {
  Agent: string;
  Pmts: number;
  CurrentBalance: number;
  TotalWeek: number;
  SettledFigure: number;

  constructor() { }
}