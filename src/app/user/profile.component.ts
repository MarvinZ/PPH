import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ReportResponse } from './../models/api';

import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'


@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent extends Localization implements OnInit {
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

constructor(private affiliateService: AffiliateService, public toastr: ToastsManager,
		public vcr: ViewContainerRef, public locale: LocaleService, private router: Router,
		public translation: TranslationService, private auth: AuthService) {
		super(locale, translation);
		this.toastr.setRootViewContainerRef(vcr);
	}

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['home'])
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }
  
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  cancel() {
    this.router.navigate(['home'])
  }
       
}