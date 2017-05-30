import { Component, OnInit, ViewContainerRef } from '@angular/core';
//import { ContactService } from './contact.service'
import { ContactService } from './../services/contact.service';
import { ContactusResponse } from './../models/contact';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent extends Localization implements OnInit {

   /*constructor(public locale: LocaleService, public translation: TranslationService) {
              super(locale, translation);

   }*/

public tempRes: ContactusResponse;
public errorMessage: string;



constructor(public locale: LocaleService, public translation: TranslationService, private contactService:ContactService, private router:Router, public toastr: ToastsManager, public vcr: ViewContainerRef) {
        super(locale, translation);
        this.toastr.setRootViewContainerRef(vcr);
        this.tempRes = new ContactusResponse('', '', '');
   }

  contactus(formValues){
   
     this.contactService.contactEmail(formValues.name, formValues.email, formValues.phone, formValues.message)
     .subscribe(tempRes => {this.tempRes = tempRes;
       console.log (this.tempRes);

      if(this.tempRes.Status == 'Success'){
        this.showSuccess();
      }

     },
     
    error => this.errorMessage = <any>error);

   }// Termina contactUs



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
        // this.toastr.success('The email has been send', 'Success');
      }



   cancel() {
    this.router.navigate(['home'])
   }



  ngOnInit() {
  }

}
