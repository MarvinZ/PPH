import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';


@Component({
  selector: 'app-player-standings',
  templateUrl: './player-standings.component.html',
  styleUrls: ['./player-standings.component.css']
})
export class PlayerStandingsComponent extends Localization implements OnInit {
	private myDatePickerOptions: IMyOptions = {
		// other options...
		dateFormat: 'dd.mm.yyyy',
	};

	private model: Object = { date: { year: 2018, month: 10, day: 9 } };

	//  private myDateRangePickerOptions2: IMyOptions2 = {
	//         // other options...
	//         dateFormat: 'dd.mm.yyyy',
	//     };

	// For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
	// to set initial date range value using the selDateRange attribute.
	private model2: Object = {
		beginDate: { year: 2018, month: 10, day: 9 },
		endDate: { year: 2018, month: 10, day: 19 }
	};
	response: any
	errorMessage: string
	constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, public vcr: ViewContainerRef, public locale: LocaleService, public translation: TranslationService) {
		super(locale, translation);
		this.toastr.setRootViewContainerRef(vcr);

	}

	ngOnInit() {
  }

}
