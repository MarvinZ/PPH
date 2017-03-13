import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Localization, LocaleService, TranslationService } from 'angular-l10n';

import { CarouselConfig } from 'ng2-bootstrap/carousel';

import { AffiliateService } from '../services/affiliate.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-affiliate-sign-up',
  templateUrl: './affiliate-sign-up.component.html',
  styleUrls: ['./affiliate-sign-up.component.css']
})
export class AffiliateSignUpComponent extends Localization implements OnInit {

  isSuccessfulSignup: Boolean = false;
  constructor(public toastr: ToastsManager, public vcr: ViewContainerRef,
    public locale: LocaleService, public translation: TranslationService,
    private affiliateService: AffiliateService, private router: Router) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() { }



  signup(formValues) {
    console.log(formValues);
    /*
    FirstName: string, LastName: string, Email: string, CountryName: string, CountryDialCode: string, Address1: string, Address2: string,
   Phone: string, City: string, ZipCode: string, BusinessName: string, LanguageId: number, AgentName: string, AgentPassword: string
   */
    this.affiliateService.InsertPreAffiliate(formValues.name, formValues.lastname,
      formValues.email, formValues.countryName, formValues.countrytCode, formValues.addressLine1, formValues.addressLine2,
      formValues.phone, formValues.city, formValues.zip, formValues.businessName, 1 /*formValues.LanguageId*/,
      formValues.nickname, formValues.password).subscribe(val => console.log(val));
    // if(result.result==='success') {
    //   this.toastr.success('Succesful singup :) NOT .', 'Successssssssssssssssss');    // this.authService.loginUser(formValues.userName, formValues.password)
    //   this.isSuccessfulSignup = true;
    // }
    // else {
    //   this.toastr.error ('ERROR', 'errrorrrrrr');    // this.authService.loginUser(formValues.userName, formValues.password)
    // }



    // this.router.navigate(['home'])
  }

  cancel() {
    this.router.navigate(['home'])
  }

}
