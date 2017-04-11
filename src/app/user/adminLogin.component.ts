import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { LoginResponse, ResponseStatus, ResponseAgentInfo } from './../models/api';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';




@Component({
  templateUrl: './adminlogin.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
    
  `]
})
export class AdminLoginComponent {

  public tempRes: LoginResponse
  public errorMessage: string
  public showInvalidCredentials: boolean
  public loading: boolean


  constructor(private authService: AuthService, private router: Router) {
    this.tempRes = new LoginResponse(new ResponseStatus('', '', ''), new ResponseAgentInfo('', 0));
  }

  login(formValues) {
    this.loading = true;
    this.authService.currentUser = {
      id: 999,
      userName: 'Admin',
      firstName: 'Admin',
      lastName: 'Admin',
      userType: 'Admin',
      selectedSubagent: 0,
      originalId: 999
    }
    this.router.navigate(['preAffiliates']);


    //login admin user
    // this.authService.loginUser(formValues.userName, formValues.password).subscribe(tempRes => {
    //   this.tempRes = tempRes;


    //   if (this.tempRes.ResponseStatus.Status === 'Success' && this.tempRes.ResponseAgentInfo.IdAgent != 0) {
    //     this.loading = true;

    //     alert('welcome...');

    //     this.authService.currentUser = {
    //       id: this.tempRes.ResponseAgentInfo.IdAgent,
    //       userName: formValues.userName,
    //       firstName: formValues.userName,
    //       lastName: 'Test',
    //       userType: 'PPH',
    //       selectedSubagent: 0
    //     }

    //     this.router.navigate(['main']);
    //   }
    //   else {
    //     this.showInvalidCredentials = true;
    //   }
    // },
    //   error => this.errorMessage = <any>error);
  }

  cancel() {
    this.router.navigate(['home']);
  }


}