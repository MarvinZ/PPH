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
	selector: 'app-weekly-transactions',
	templateUrl: './weekly-transactions.component.html',
	styleUrls: ['./weekly-transactions.component.css']
})
export class WeeklyTransactionsComponent extends Localization implements OnInit {
	private myDatePickerOptions: IMyOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd',
	};
	private dateModel: any
	loading: boolean = false;
	descFilter: string = "";

	// ddlSports :string
	// ddlTransType: string
	// ddlCurrency: string

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
	// private model2: Object = {
	// 	beginDate: { year: 2018, month: 10, day: 9 },
	// 	endDate: { year: 2018, month: 10, day: 19 }
	// };
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

			new Angular2Csv(this.response.CashFlowList, 'WeeklyTransactions' + displayDate, options);
		} catch (error) {
			alert(error);
		}
	}

	getTotal(cat: string) {
		let result = 0;
		//  console.log(Item);
		if (this.response.CashFlowList.length > 0) {
			for (let entry of this.response.CashFlowList) {
				if (cat === 'Amount')
					result = result + Number(entry.Amount);
				if (cat === 'Balance')
					result = result + Number(entry.Balance);
			}
		}
		return result
	}
}
