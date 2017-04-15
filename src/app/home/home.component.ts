import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Localization, LocaleService, TranslationService } from 'angular-l10n';

import { CarouselConfig } from 'ng2-bootstrap/carousel';

import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'

import { ContactusResponse } from './../models/contact';
import { ContactService } from './../services/contact.service';





@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }]
})
export class HomeComponent extends Localization implements OnInit {

  public tempRes: ContactusResponse;
  public errorMessage: string;

  public contactRequestSubmitted: Boolean = false;

  constructor(public locale: LocaleService, public translation: TranslationService,
    private contactService: ContactService, private router: Router, public toastr: ToastsManager, public vcr: ViewContainerRef) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);
    this.tempRes = new ContactusResponse('', '', '');
  }


  showSuccess() {
    this.toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-full-width",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    // http://codeseven.github.io/toastr/demo.html
    this.toastr.success('Thank you! We will contact you soon', 'Success');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
  }

  ngOnInit() {
  }

  contactus(formValues) {

    this.contactService.contactEmail(formValues.name, formValues.email, formValues.phone, "Home page sign-up request")
      .subscribe(tempRes => {
        this.tempRes = tempRes;
        console.log(this.tempRes);

        if (this.tempRes.Status == 'Success') { //needs more work
          this.showSuccess();
          this.contactRequestSubmitted = true;
        }

      },

      error => this.errorMessage = <any>error);

  }

  testSession() {
    // alert('voy');
    // localStorage.setItem('whatever', 'something holiiiiis');
    // localStorage.removeItem('whatever');
    // alert(localStorage.getItem('whatever'));

   // console.log (     - (new Date(localStorage.getItem('timestamp'))).valueOf() );
    


  }

  showSession() {
    alert('voy');

    let currentUser = JSON.parse(localStorage.getItem('whatever'));
    alert(currentUser);

    console.log(currentUser);
  }


}
