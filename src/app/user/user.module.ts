import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { AdminLoginComponent } from './adminLogin.component'

import { LocalizationModule } from 'angular-l10n';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    LocalizationModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    AdminLoginComponent,
  ],
  providers: [

  ]
})
export class UserModule { }