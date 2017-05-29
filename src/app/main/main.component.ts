import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent extends Localization implements OnInit {

	response: any
	response2: any
	response3: any
	response4: any


	multi: any = [
		{
			"name": "Hits",
			"series": [
				{
					"name": "2010",
					"value": 7300000
				},
				{
					"name": "2011",
					"value": 8940000
				}
			]
		},

		{
			"name": "Unique clicks",
			"series": [
				{
					"name": "2010",
					"value": 7870000
				},
				{
					"name": "2011",
					"value": 8270000
				}
			]
		},

		{
			"name": "Signups",
			"series": [
				{
					"name": "2010",
					"value": 5000002
				},
				{
					"name": "2011",
					"value": 5800000
				}
			]
		}
	];
	view: any[] = [700, 400];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Year';
	showYAxisLabel = true;
	yAxisLabel = '';

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// line, area
	autoScale = true;


	errorMessage: string
	constructor(private affiliateService: AffiliateService, public toastr: ToastsManager,
		public vcr: ViewContainerRef, public locale: LocaleService, private router: Router,
		public translation: TranslationService, private auth: AuthService) {
		super(locale, translation);
		this.toastr.setRootViewContainerRef(vcr);

		//Object.assign(this, {this.single, this.multi})   

	}

	ngOnInit() {
		if (!this.auth.currentUser) {
			this.router.navigate(['/user/login']);
		}
		let currentDate = new Date();
		let day = currentDate.getDate();
		let month = currentDate.getMonth() + 1;
		let year = currentDate.getFullYear();
		let date = year + '-' + month + '-' + day;
		let t0 = performance.now();

		this.affiliateService.GetAffStatistics(this.auth.currentUser.id, date)
			.subscribe(response => {
				this.response = response;
				let t1 = performance.now();
				this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);



		let t2 = performance.now();
		this.affiliateService.GetMarketingStats(this.auth.currentUser.userName)
			.subscribe(response2 => {
				this.response2 = response2;

				console.log(this.response2);
				let t3 = performance.now();
				this.toastr.success('This query took ' + (t3 - t2) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);


		let t4 = performance.now();
		this.affiliateService.GetLastVisits(this.auth.currentUser.affCode)
			.subscribe(response3 => {
				this.response3 = response3;

				console.log(this.response3);
				let t5 = performance.now();
				this.toastr.success('This query took ' + (t5 - t4) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);

				let t6 = performance.now();
		this.affiliateService.GetStatsLast7Days(this.auth.currentUser.affCode)
			.subscribe(response4 => {
				this.response4 = response4;

				console.log(this.response4);
				let t7 = performance.now();
				this.toastr.success('This query took ' + (t7 - t6) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);



	}

}


