import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { LoginResponse, ResponseStatus, ResponseAgentInfo } from './../models/api';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';




@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
    
  `]
})
export class LoginComponent {

  public tempRes: LoginResponse
  public errorMessage: string
  public showInvalidCredentials: boolean
  public loading: boolean


  constructor(private authService: AuthService, private router: Router) {
    this.tempRes = new LoginResponse(new ResponseStatus('', '', ''), new ResponseAgentInfo('', 0));
  }

  login(formValues) {
    this.loading = true;

    this.authService.loginUser(formValues.userName, formValues.password).subscribe(tempRes => {
      this.tempRes = tempRes;


      if (this.tempRes.ResponseStatus.Status === 'Success' && this.tempRes.ResponseAgentInfo.IdAgent != 0) {
        this.loading = true;

        // alert('Plese contact Joe ASAP...');

        this.authService.currentUser = {
          id: this.tempRes.ResponseAgentInfo.IdAgent,
          userName: formValues.userName,
          firstName: formValues.userName,
          lastName: 'Test',
          userType: 'PPH',
          selectedSubagent: 0,
          originalId: this.tempRes.ResponseAgentInfo.IdAgent,
          bookId: 1
        }
        localStorage.setItem('agentId',  this.authService.currentUser.id.toString());
        localStorage.setItem('userName',  this.authService.currentUser.userName);
        localStorage.setItem('firstName',  this.authService.currentUser.firstName);
        localStorage.setItem('lastName',  this.authService.currentUser.lastName);
        localStorage.setItem('userType',  this.authService.currentUser.userType);
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