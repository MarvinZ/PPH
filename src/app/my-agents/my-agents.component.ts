import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-my-agents',
  templateUrl: './my-agents.component.html',
  styleUrls: ['./my-agents.component.css']
})
export class MyAgentsComponent extends Localization implements OnInit {



  loading: boolean = false;

  isEditMode: Boolean = false;

  preAffiliate = {
    "Id": "",
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
    "AgentPassword": "",
    "IdBook": ''
  };


  response: any
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
    this.getData();


  }
  getData() {
    this.loading = true;
    let t0 = performance.now();
    // this.affiliateService.GetMyAgents(this.auth.currentUser.id)
    //   .subscribe(response => {
    //     this.response = response;
    //     this.loading = false;

    //     console.log(this.response);
    //     let t1 = performance.now();
    //     this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
    //   },
    //   error => this.errorMessage = <any>error);


    this.affiliateService.GetAgenthierarchy('', '', '', null, '', this.auth.currentUser.userName)
      .subscribe(response => {
        this.response = response;
        this.loading = false;

        console.log(this.response);
        let t1 = performance.now();
        this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);


  }



  viewAs(agentId: number, agentName: string) {
    this.auth.viewingAs = agentName;
    this.auth.viewAs(agentId);
    this.router.navigate(['main']);
  }

  deactivateAgent(agentId: number) {
    alert(agentId);
  }

  goToAddAgent() {

    this.isEditMode = !this.isEditMode;
  }

  goBack() {
    // this.resetform();
    this.closeDetails();
  }
  closeDetails() {
    this.isEditMode = false;


  }

  // signup(formValues) {
  //   alert('holis');
  //   console.log(formValues);
  // }


  signup(formValues) { //Create new agent
    console.log(formValues);
    /*
    FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
   Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string
   */
    this.affiliateService.CreateSubAgent(formValues.name, formValues.lastname,
      formValues.email, '', '', '', '',
      formValues.phone, '', '', '', 1 /*formValues.LanguageId*/,
      formValues.AgentName, formValues.AgentPassword, this.auth.currentUser.bookId.toString(), this.auth.currentUser.id.toString()).subscribe(val => {
        // needs state or province
        console.log(val);
        if (val[0] > 0) {
          this.toastr.success('The agent has been created!', 'Success');
          this.getData();
          this.closeDetails();

        }
        else {
          this.toastr.error('The agent has not been created!', 'Error');
        }

      });
  }


}  //end of class

