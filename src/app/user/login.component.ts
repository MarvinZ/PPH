import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { LoginResponse, ResponseStatus, ResponseAgentInfo } from './../models/api';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';




@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding:0 20px; font-weight:bold; font-size:12px; }
    .login-form {padding:65px 0;margin-bottom:60px;}
    form {margin-bottom:20px;}
  `]
})
export class LoginComponent {

  public tempRes: LoginResponse
  public errorMessage: string
  public showInvalidCredentials: boolean
  public loading: boolean


  constructor(private authService: AuthService, private router: Router) {
    this.tempRes = new LoginResponse(new ResponseStatus('', '', ''), new ResponseAgentInfo('', 0, '',0));
  }

  login(formValues) {
    this.loading = true;

    this.authService.loginUser(formValues.userName, formValues.password).subscribe(tempRes => {
      this.tempRes = tempRes;


      if (this.tempRes.ResponseStatus.Status === 'Success' && this.tempRes.ResponseAgentInfo.IdAgent != 0) {
        this.loading = true;
        console.log(this.tempRes.ResponseAgentInfo);
        // alert('Plese contact Joe ASAP...');

        this.authService.currentUser = {
          id: this.tempRes.ResponseAgentInfo.IdAgent,
          userName: formValues.userName,
          firstName: formValues.userName,
          lastName: 'Test',
          userType: 'PPH',
          selectedSubagent: 0,
          originalId: this.tempRes.ResponseAgentInfo.IdAgent,
          bookId: this.tempRes.ResponseAgentInfo.Idbook,
          affCode: this.tempRes.ResponseAgentInfo.AffiliateCode
          
        }
        localStorage.setItem('agentId', this.authService.currentUser.id.toString());
        localStorage.setItem('userName', this.authService.currentUser.userName);
        localStorage.setItem('firstName', this.authService.currentUser.firstName);
        localStorage.setItem('lastName', this.authService.currentUser.lastName);
        localStorage.setItem('userType', this.authService.currentUser.userType);
        localStorage.setItem('affCode', this.authService.currentUser.affCode);
                localStorage.setItem('bookId', this.authService.currentUser.affCode);


        //  localStorage.setItem('timestamp', new Date().getTime().toString())
        this.router.navigate(['main']);
      }
      else {
        this.showInvalidCredentials = true;
        this.loading = false;
      }
    },
      error => this.errorMessage = <any>error);
  }

  cancel() {
    this.router.navigate(['home']);
  }


}