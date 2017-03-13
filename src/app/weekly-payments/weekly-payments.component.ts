
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { ReportService } from './../services/report.service'
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'


@Component({
	selector: 'app-weekly-payments',
	templateUrl: './weekly-payments.component.html',
	styleUrls: ['./weekly-payments.component.css']
})
export class WeeklyPaymentsComponent extends Localization implements OnInit {
	private myDatePickerOptions: IMyOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd',
	};
	private dateModel: any
	loading: boolean = false;

	// ddlSports :string
	ddlTransType: string = '-1'
	ddlCurrency: string = '1'


	public currencies = [
		{ value: '1', display: 'USD' },
		{ value: '2', display: 'MXN' },
		{ value: '3', display: 'GBP' },
		{ value: '4', display: 'EUR' }
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
		let t0 = performance.now();
		this.affiliateService.GetWeeklyPaymentsReport(this.auth.currentUser.id,
			this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day, this.ddlCurrency)
			.subscribe(response => {
				this.response = response;
				this.loading = false;
				let t1 = performance.now();
				this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);
	}
}





