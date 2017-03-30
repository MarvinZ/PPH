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
	selector: 'app-weekly-balances',
	templateUrl: './weekly-balances.component.html',
	styleUrls: ['./weekly-balances.component.css']
})
export class WeeklyBalancesComponent extends Localization implements OnInit {
	private myDatePickerOptions: IMyOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd',
	};
	private dateModel: any
	loading: boolean = false;

	ddlTransType: string = '-1'
	ddlCurrency: string = '1'


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
		this.dateModel = { date: { year: year, month: month, day: day } };
	}

	go() {
		this.loading = true;
		this.response = null;
		let t0 = performance.now();
		let datetoUse = this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day;
		this.affiliateService.GetWeeklyBalanceReport('1', this.ddlTransType, this.auth.currentUser.id, datetoUse, this.ddlCurrency)
			.subscribe(response => {
				this.response = response;
				this.loading = false;
				let t1 = performance.now();
				this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);
	}

	goExactly(whichWeek: string) {
		this.loading = true;
		this.response = null;
		let t10 = performance.now();
		let currentDate = new Date();
		let day = currentDate.getDate();
		let month = currentDate.getMonth() + 1;
		let year = currentDate.getFullYear();
		let datetoUse = year + '-' + month + '-' + day;

		if (whichWeek === 'thisWeek') {
			//use today

		} else {
			if (whichWeek === 'lastWeek') {
				let oneWeekAgo = new Date();
				oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
				let day = oneWeekAgo.getDate();
				let month = oneWeekAgo.getMonth() + 1;
				let year = oneWeekAgo.getFullYear();
				datetoUse = year + '-' + month + '-' + day;

			} else {
				if (whichWeek === 'last2Weeks') {
					let TwoWeeksAgo = new Date();
					TwoWeeksAgo.setDate(TwoWeeksAgo.getDate() - 14);
					let day = TwoWeeksAgo.getDate();
					let month = TwoWeeksAgo.getMonth() + 1;
					let year = TwoWeeksAgo.getFullYear();
					datetoUse = year + '-' + month + '-' + day;

				} else {
					if (whichWeek === 'last3Weeks') {
						let TwoWeeksAgo = new Date();
						TwoWeeksAgo.setDate(TwoWeeksAgo.getDate() - 21);
						let day = TwoWeeksAgo.getDate();
						let month = TwoWeeksAgo.getMonth() + 1;
						let year = TwoWeeksAgo.getFullYear();
						datetoUse = year + '-' + month + '-' + day;

					} else {
						//do nothing
					}
				}

			}

		}

		this.affiliateService.GetWeeklyBalanceReport('1', this.ddlTransType, this.auth.currentUser.id, datetoUse, this.ddlCurrency)
			.subscribe(response => {
				this.response = response;
				this.loading = false;
				let t11 = performance.now();
				this.toastr.success('This query took ' + (t11 - t10) + ' milliseconds..', 'Success');
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

			new Angular2Csv(this.response.AgentList, 'WeeklyTransactions' + displayDate, options);
		} catch (error) {
			alert(error);
		}
	}

}





