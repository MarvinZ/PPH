import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { LoginResponse, ResponseStatus, ResponseAgentInfo }     from './../models/api';



@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent {

  public tempRes: LoginResponse
  public  errorMessage: string

  public showInvalidCredentials: boolean


  constructor(private authService:AuthService, private router:Router) {
    this.tempRes = new LoginResponse(new ResponseStatus('','',''), new ResponseAgentInfo ('',0));

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password).subscribe(tempRes => {this.tempRes = tempRes ;
    
if(this.tempRes.ResponseStatus.Status === 'Success'  && this.tempRes.ResponseAgentInfo.IdAgent != 0 ){
              alert ('welcome...');

               this.authService.currentUser = {
      id: this.tempRes.ResponseAgentInfo.IdAgent,
      userName: formValues.userName,
      firstName: formValues.userName,
      lastName: 'Test',
      userType: 'PPH'
    }

              
                this.router.navigate(['home']);
            }
            else {
              this.showInvalidCredentials = true;
            }
          
       
  
},
                           error => this.errorMessage = <any>error);



  }

  cancel() {
    this.router.navigate(['home']);
  }


}