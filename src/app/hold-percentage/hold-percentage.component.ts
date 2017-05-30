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
  selector: 'app-hold-percentage',
  templateUrl: './hold-percentage.component.html',
  styleUrls: ['./hold-percentage.component.css']
})
export class HoldPercentageComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: boolean = false;
  viewDetail: Boolean = false;
  players: any = [];

  // ddlSports :string = 'NFL'
  // ddlTransType: string = '-1'
  ddlAgent: number = -1
  ddlPlayer: number = -1

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
  // 	{ value: 'All', display: 'ALL' }
  // ];


  response: any
  response2: any
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

    let currentDateStart = new Date();
    currentDateStart.setDate(currentDateStart.getDate() - 7);

    let day2 = currentDateStart.getDate();
    let month2 = currentDateStart.getMonth() + 1;
    let year2 = currentDateStart.getFullYear();

    this.dateModel = {
      beginDate: { year: year2, month: month2, day: day2 },
      endDate: { year: year, month: month, day: day }
    };

    //get agents and players

    let t0 = performance.now();
    let t1 = performance.now();
    this.affiliateService.GetDistributorAgentsAndPlayers('', '', '', 0, this.auth.currentUser.userName)
      .subscribe(response2 => {
        this.response2 = response2;
        this.loading = false;

        // console.log(this.response2);
        let t1 = performance.now();
        // this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);

  }


  go() {
    this.response = null;
    this.loading = true;
    let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;
    let playerId = this.ddlPlayer;
    let agentId = this.ddlAgent;
    if (agentId === -1) {
      agentId = this.auth.currentUser.id
    }


    let t0 = performance.now();
    let t1 = performance.now();
    this.affiliateService.GetAgentHoldPercentReport(agentId, startDate, endDate, playerId)
      .subscribe(response => {
        this.response = response;
        //    this.totals = this.calculateTotals(response);
        this.loading = false;

        // console.log(this.response);
        let t1 = performance.now();
        // this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }

  ExportToExcel() {
    let res = []

    for (let agent of this.response) {
      if (agent.DetailList) {
        for (let player of agent.DetailList) {
          player.agent = agent.Agent;
          res.push(player);
        }
      }
    }
    // console.log(res);

    try {
      var options = {
        showLabels: true
      };
      var displayDate = '-D:' + new Date().toLocaleDateString() + 'T:' + new Date().toLocaleTimeString();

      new Angular2Csv(res, 'HoldPercent' + displayDate, options);
    } catch (error) {
      alert(error);
    }
  }


  getTotal(Item: any, cat: string) {
    let result = 0;
    //  // console.log(Item);
    if (Item.DetailList.length > 0) {
      for (let entry of Item.DetailList) {
        if (cat === 'Amount')
          result = result + Number(entry.Amount);
        if (cat === 'WinLoss')
          result = result + Number(entry.WinLoss);
        if (cat === 'Hold')
          result = result + Number(entry.Hold);

      }
    }

    return result
  }

  onChangeagentDdl() {
    alert(this.ddlAgent);
    this.players = this.response2.filter(e => e.IdAgent == this.ddlAgent)[0].PlayerList
    // console.log(this.players);
  }

}  //end of class

