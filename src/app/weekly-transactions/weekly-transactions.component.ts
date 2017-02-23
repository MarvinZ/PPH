import { Component, OnInit } from '@angular/core';

import {IMyOptions} from 'mydatepicker';



@Component({
  selector: 'app-weekly-transactions',
  templateUrl: './weekly-transactions.component.html',
  styleUrls: ['./weekly-transactions.component.css']
})
export class WeeklyTransactionsComponent implements OnInit {
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
    private model2: Object = {beginDate: {year: 2018, month: 10, day: 9},
                             endDate: {year: 2018, month: 10, day: 19}};
  constructor() { }

  ngOnInit() {
  }

}
