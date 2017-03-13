
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-weekly-payments',
  templateUrl: './weekly-payments.component.html',
  styleUrls: ['./weekly-payments.component.css']
})
export class WeeklyPaymentsComponent extends Localization implements OnInit {
	response: any

	errorMessage: string
  
  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, public vcr: ViewContainerRef, public locale: LocaleService, public translation: TranslationService) {
		super(locale, translation);
		this.toastr.setRootViewContainerRef(vcr);

	}


ngOnInit() {
		this.affiliateService.GetWeeklyPaymentsReport(1,'2017-02-02',"1")
			.subscribe(response => {
				this.response = response;
				if (this.response.ResponseStatus.Status === 'Success'
					&& this.response.ResponseInfo) {
					this.toastr.success('This toast will dismiss in 2 seconds.', 'Successssssssssssssssss');
					console.log(this.response.ResponseInfo);

				}
				else this.toastr.error('This is not good!', 'Oops!');
			},
			error => this.errorMessage = <any>error);



	}

}
