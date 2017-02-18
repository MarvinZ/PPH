import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ThingsComponent } from './things/things.component'
import { WagersComponent } from './wagers/wagers.component'

import { PlayersComponent } from './players/players.component'
import { GenericReport2Component } from './generic-report2/generic-report2.component'
import { ThingDetailComponent } from './thing-detail/thing-detail.component'
import { ThingDetailGuard } from './guards/thing-detail-guard'

import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { HowitworksComponent } from './howitworks/howitworks.component'



import { Error404Component } from './errors/404.component'


export const appRoutes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'things', component: ThingsComponent },
    { path:'wagers', component: WagersComponent },

    { path:'howitworks', component: HowitworksComponent },
    { path:'faq', component: FaqComponent },
    { path:'contactus', component: ContactComponent },
    { path:'players', component: PlayersComponent },
    { path:'genericReport2', component: GenericReport2Component },
    { path:'', redirectTo: '/home', pathMatch:'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: '404', component: Error404Component },
    { path: 'thing/:id',canActivate: [ ThingDetailGuard],component: ThingDetailComponent }


]