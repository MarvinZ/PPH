import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from './../services/chat.service';


@Component({
  selector: 'app-weekly-balances',
  templateUrl: './weekly-balances.component.html',
  styleUrls: ['./weekly-balances.component.css']
})
export class WeeklyBalancesComponent implements OnInit {

  	randomData: number[] = [];
			//messages: Message[] = [];


private message = {
		author : 'peter',
		message: ''
	};
  constructor(private chatService: ChatService) { }

// sendMsg() {
// 		// console.log('new message from client: ', this.message);
// 		this.chatService.messages.next(this.message);
// 		this.message.message = '';
// 	}

	ngOnInit(){

		// this.chatService.messages.subscribe(msg => {
		// 	this.messages.push(msg);
		// });

		this.chatService.randomData.subscribe(num => {
			this.randomData.push(num);
			// reset if there are 20 numbers in the array
			if (this.randomData.length > 20) {
				this.randomData = [];
			}
		})
	}

}
