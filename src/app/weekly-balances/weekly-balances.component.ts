// import { Component, OnInit } from '@angular/core';
// import {ChatService, Message} from './../services/chat.service';


// @Component({
//   selector: 'app-weekly-balances',
//   templateUrl: './weekly-balances.component.html',
//   styleUrls: ['./weekly-balances.component.css']
// })
// export class WeeklyBalancesComponent implements OnInit {

//   	randomData: number[] = [];
// 			//messages: Message[] = [];


// private message = {
// 		author : 'peter',
// 		message: ''
// 	};
//   constructor(private chatService: ChatService) { }

// // sendMsg() {
// // 		// console.log('new message from client: ', this.message);
// // 		this.chatService.messages.next(this.message);
// // 		this.message.message = '';
// // 	}

// 	ngOnInit(){

// 		// this.chatService.messages.subscribe(msg => {
// 		// 	this.messages.push(msg);
// 		// });

// 		this.chatService.randomData.subscribe(num => {
// 			this.randomData.push(num);
// 			// reset if there are 20 numbers in the array
// 			if (this.randomData.length > 20) {
// 				this.randomData = [];
// 			}
// 		})
// 	}

// }

import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { ReportService } from './../services/report.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
	selector: 'app-weekly-balances',
	templateUrl: './weekly-balances.component.html',
	styleUrls: ['./weekly-balances.component.css']
})
export class WeeklyBalancesComponent extends Localization implements OnInit {

	response: ReportResponse
	response2: ReportResponse

	errorMessage: string


	constructor(private reportService: ReportService, public toastr: ToastsManager, public vcr: ViewContainerRef, public locale: LocaleService, public translation: TranslationService) {
		super(locale, translation);
		this.toastr.setRootViewContainerRef(vcr);

	}

	ngOnInit() {
		this.reportService.GetAgentExposureReport(2287)
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


	go2() {
		let t0 = performance.now();
		this.reportService.GetWeeklyBalanceReport(2287)
			.subscribe(response2 => {
			this.response2 = response2;
				if (this.response2.ResponseStatus.Status === 'Success'
      /* && this.response2.ResponseInfo*/) {
					console.log(this.response2.ResponseInfo);
					let t1 = performance.now();
					this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');

				}
				else {
					this.toastr.error('This is not good!', 'Oops!');
					console.log(this.response2.ResponseInfo);
				}
			},
			error => this.errorMessage = <any>error);

	}

}





