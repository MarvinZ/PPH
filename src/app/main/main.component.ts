import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent extends Localization implements OnInit {

	response: any
	response2: any

	errorMessage: string
	constructor(private affiliateService: AffiliateService, public toastr: ToastsManager,
		public vcr: ViewContainerRef, public locale: LocaleService, private router: Router,
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
		let date = year + '-' + month + '-' + day;
		let t0 = performance.now();

		this.affiliateService.GetAffStatistics(this.auth.currentUser.id, date)
			.subscribe(response => {
				this.response = response;
				let t1 = performance.now();
				this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);



		this.affiliateService.GetMyAgents(this.auth.currentUser.id)
			.subscribe(response2 => {
				this.response2 = response2;
				let t1 = performance.now();
				this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
			},
			error => this.errorMessage = <any>error);



	}

}
