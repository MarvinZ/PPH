import { Component, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ReportService } from './../services/report.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { Angular2Csv } from 'angular2-csv/angular2-csv';


@Component({
  selector: 'app-agent-exposure',
  templateUrl: './agent-exposure.component.html',
  styleUrls: ['./agent-exposure.component.css']
})
export class AgentExposureComponent extends Localization implements OnInit {

  @ViewChild('ExposureModalComponent')
  public readonly modal: ExposureModalComponent


  loading: boolean = false;

  ddlSports: string = 'NFL'
  ddlCurrency: string = '1'

  public sports = [
    { value: 'NFL', display: 'NFL' },
    { value: 'MU', display: 'MU' },
    { value: 'MLB', display: 'MLB' },
    { value: 'CBB', display: 'CBB' },
    { value: 'CFB', display: 'CFB' },
    { value: 'PROP', display: 'PROP' },
    { value: 'CBB', display: 'CBB' },
    { value: 'NBA', display: 'NBA' },
    { value: 'SOC', display: 'SOC' },
    { value: 'TNT', display: 'TNT' },
    { value: 'NHL', display: 'NHL' },
    { value: 'All', display: 'ALL' }
  ];

  public currencies = [
    { value: '1', display: 'USD' },
    { value: '2', display: 'MXN' },
    { value: '3', display: 'GBP' },
    { value: '4', display: 'EUR' }
  ];

  response: any
  errorMessage: string


  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, private router: Router,
    public vcr: ViewContainerRef, public locale: LocaleService,
    public translation: TranslationService, private auth: AuthService, private reportService: ReportService) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);

  }
  ngOnInit() {
    if (!this.auth.currentUser) {
      this.router.navigate(['/user/login']);
    }


  }
  // go() {
  //   this.reportService.GetAgentExposureReport(this.auth.currentUser.id, this.ddlSports,this.ddlCurrency)
  //     .subscribe(response => {
  //       this.response = response;
  //       if (this.response.ResponseStatus.Status === 'Success'
  //         && this.response.ResponseInfo) {
  //         this.toastr.success('This toast will dismiss in 2 seconds.', 'Successssssssssssssssss');
  //         console.log(this.response.ResponseInfo);

  //       }
  //       else this.toastr.error('This is not good!', 'Oops!');
  //     },
  //     error => this.errorMessage = <any>error);



  // }
  go() {
    this.response = null;
    this.loading = true;
    let t0 = performance.now();
    this.affiliateService.GetAgentExposureReport(this.auth.currentUser.id, this.ddlSports, this.ddlCurrency)
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


  openModal(play: string, wagertype: string, idgame: string) {
    alert('holiiis');
    //this.modal.show();
    // try {
    //   //$scope.isBusy = true;


    //   // var title = "Modal Title";
    //   // var message = "Modal Message";

    //   var modalInstance = $uibModal.open({
    //     animation: true,
    //     templateUrl: 'myModal.html',
    //     size: 'lg',
    //     controller: function ($scope) {

    //       var affInfo = $cookies.getObject("AffInfo").AgentInSession;

    //       $http.get(myConfig.ApiUrl + "GetAgentExposureReportDetail?idagent=" + affInfo.IdAgent + "&idgame=" + idgame + "&wagertype=" + wagertype + "&play=" + play).then( //=?idAgent" + affInfo.IdAgent + "&reportdate=" + date
    //         function (result) {
    //           $scope.ExposureDetails = result.data;

    //           var totalRisk = 0;
    //           var totalWin = 0;

    //           for (var i = 0; i < $scope.ExposureDetails.ListDetail.length; i++) {
    //             var betItem = $scope.ExposureDetails.ListDetail[i];
    //             totalWin = totalWin + parseFloat(betItem._winamount);
    //             totalRisk = totalRisk + parseFloat(betItem._riskamount);
    //           }

    //           $scope.totalRisk = totalRisk;
    //           $scope.totalWin = totalWin;

    //         },
    //         function (error) {
    //           alert(error.data.Message);
    //         }
    //       ).finally(
    //         function () {
    //           $scope.isBusy = false;
    //         }
    //         );

    //       $scope.ok = function () { modalInstance.dismiss() };
    //     }
    //   });


    // } catch (e) {
    //   alert(e.message);
    // }
  }


}


@Component({
  selector: 'exposure-modal',
  template: `
  <div (click)="hide()" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <ng-content select=".app-modal-header"></ng-content>
        </div>
        <div class="modal-body">
          <ng-content select=".app-modal-body"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select=".app-modal-footer"></ng-content>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ExposureModalComponent extends Localization {

  public visible = false;
  private visibleAnimate = false;


  response: any
  errorMessage: string

  totalRisk: number
  totalWin: number

  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, private router: Router,
    public vcr: ViewContainerRef, public locale: LocaleService,
    public translation: TranslationService, private auth: AuthService, private reportService: ReportService) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);

  }

  public show(play: string, wagertype: string, idgame: string): void {
    this.go2(idgame, wagertype, play);
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  go2(game: string, wagertype: string, play: string) {
    let t0 = performance.now();
    this.affiliateService.GetAgentExposureReportDetail(this.auth.currentUser.id,
      game, wagertype, play)
      .subscribe(response => {
        this.response = response;

        console.log(this.response);
        let totalRiskCalc = 0;
        let totalWinCalc = 0;

        for (let entry of this.response.ListDetail) {
          totalWinCalc = totalWinCalc + parseFloat(entry._winamount);
          totalRiskCalc = totalRiskCalc + parseFloat(entry._riskamount);
        }

        this.totalRisk = totalRiskCalc; //totalRisk;
        this.totalWin = totalWinCalc;//totalWin;
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }

}
