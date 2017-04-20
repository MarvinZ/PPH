import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-pre-affiliates',
  templateUrl: './pre-affiliates.component.html',
  styleUrls: ['./pre-affiliates.component.css']
})
export class PreAffiliatesComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: boolean = false;
  showDetails: Boolean = false;

  preAffiliate = {
    "Id": 0,
    "FirstName": "",
    "LastName": "",
    "Email": "",
    "CountryName": "",
    "CountryDialCode": "",
    "Address1": "",
    "Address2": "",
    "Phone": "",
    "City": "",
    "ZipCode": "",
    "BusinessName": "",
    "LanguageId": 1,
    "AgentName": "",
    "AgentPassword": ""
  };


  response: any
  errorMessage: string
  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, private router: Router,
    public vcr: ViewContainerRef, public locale: LocaleService,
    public translation: TranslationService, private auth: AuthService) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);
  }
  getData() {
    let t0 = performance.now();
    this.affiliateService.GetPreaffiliates()
      .subscribe(response => {
        this.response = response;
        this.loading = false;

        console.log(this.response);
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }
  ngOnInit() {
    // if (!this.auth.currentUser) {
    //   this.router.navigate(['/user/login']);
    // }

    this.response = null;
    this.loading = true;
    //  let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
    // let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;
    this.getData();

  }

  closeDetails() {
    this.showDetails = false;
  }
  reject() {
    alert('rejected!!!!!');
    this.showDetails = false;
  }


  CreateAgent(formValues) {

    console.log(formValues);
    /*
    FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
   Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string
   */

    this.affiliateService.CreateAgents(formValues.name, formValues.lastname,
      formValues.email, formValues.ddlCountrie, formValues.CountryDialCode, formValues.addressLine1, formValues.addressLine2,
      formValues.phone, formValues.city, formValues.zip, formValues.businessName, 1 /*formValues.LanguageId*/,
      formValues.nickname, formValues.password).subscribe(val => {
        // needs state or province
        console.log(val);
        if (val[0] > 0) {
          this.toastr.success('The agent has been created!', 'Success');
          this.getData();
          //this.closeDetails();

        }
        else {
          this.toastr.error('The agent has not been created!', 'Error');
        }


      });
  }


  DetailsAffiliate(info: any) {

    try {
      this.showDetails = true;
      this.preAffiliate = info;


      // $cookies.putObject("affPre", info);
      // $location.path('/AdminPreDetails');

    } catch (e) {
      alert(e.message);
    }

  }





}  //end of class

