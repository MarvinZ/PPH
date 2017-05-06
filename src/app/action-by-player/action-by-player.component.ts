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
  selector: 'app-action-by-player',
  templateUrl: './action-by-player.component.html',
  styleUrls: ['./action-by-player.component.css']
})
export class ActionByPlayerComponent extends Localization implements OnInit {
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
    this.affiliateService.GetActionsByPlayer(this.auth.currentUser.id,
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
    if (Item.ListPlayer.length > 0) {
      for (let entry of Item.ListPlayer) {
        if (cat === '_straightbet')
          result = result + Number(entry._straightbet);
        if (cat === '_parlay')
          result = result + Number(entry._parlay);
        if (cat === '_teaser')
          result = result + Number(entry._teaser);
        if (cat === '_reverse')
          result = result + Number(entry._reverse);
        if (cat === '_casino')
          result = result + Number(entry._casino);
        if (cat === '_horses')
          result = result + Number(entry._horses);
        if (cat === '_otherwagers')
          result = result + Number(entry._otherwagers);
        if (cat === '_otherabjustment')
          result = result + Number(entry._otherabjustment);
        if (cat === '_horseadjustment')
          result = result + Number(entry._horseadjustment);

        if (cat === '_total')
          result = result + Number(entry._total);

        // console.log(entry);
      }
    }
    return result;
  }




  ExportToExcel() {
    let res = []

    for (let agent of this.response.ListData) {
      if (agent.ListPlayer) {
        for (let player of agent.ListPlayer) {
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

      new Angular2Csv(res, 'ActionByPlayer' + displayDate, options);
    } catch (error) {
      alert(error);
    }
  }



}  //end of class

