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
  selector: 'app-agent-distribution',
  templateUrl: './agent-distribution.component.html',
  styleUrls: ['./agent-distribution.component.css']
})
export class AgentDistributionComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  loading: boolean = false;

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

    this.go();


  }


  go() {
    this.response = null;
    this.loading = true;
    // let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    // let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;


    let t0 = performance.now();
    let t1 = performance.now();
    this.affiliateService.GetAgentdistributionReport(this.auth.currentUser.userName)
      .subscribe(response => {
        this.response = response;
        //    this.totals = this.calculateTotals(response);
        this.loading = false;

        // console.log(this.response);
        let t1 = performance.now();
        // this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }




  ExportToExcel() {
    // console.log(this.response.CashFlowList);
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



}  //end of class

