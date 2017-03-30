import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { ReportService } from './../services/report.service'
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { Angular2Csv } from 'angular2-csv/angular2-csv';



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
  ddlTransType: string = '0'
  ddlCurrency: string = '1'


  public currencies = [
    { value: '1', display: 'USD' },
    { value: '2', display: 'MXN' },
    { value: '3', display: 'GBP' },
    { value: '4', display: 'EUR' }
  ];



    public transactionTypes = [
    { value: '0', display: 'All' },
    { value: '1', display: 'Receipts' },
    { value: '2', display: 'Disbursement' },
    { value: '3', display: 'Transfer' }
  ];
  private dateModel: any
  response: any
  errorMessage: string

  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, public vcr: ViewContainerRef, private router: Router,
    public locale: LocaleService, public translation: TranslationService, private auth: AuthService) {
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
    this.loading = true;
    this.response = null;

    let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;
    let t0 = performance.now();
    this.affiliateService.GetCashFlowReport(this.ddlTransType, this.auth.currentUser.id, startDate, endDate, this.ddlCurrency)
      .subscribe(response => {
        this.response = response;
        this.loading = false;
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }


  	ExportToExcel() {
		let res = []

		for (let agent of this.response.ListAgent) {
			if (agent.ListDetail) {
				for (let player of agent.ListDetail) {
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

			new Angular2Csv(res, 'WeeklyBalances' + displayDate, options);
		} catch (error) {
			alert(error);
		}
	}


}