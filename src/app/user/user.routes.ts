import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { AdminLoginComponent } from './adminLogin.component'


export const userRoutes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent }

]