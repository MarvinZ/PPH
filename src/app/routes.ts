import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ThingsComponent } from './things/things.component'
import { WagersComponent } from './wagers/wagers.component'

import { PlayersComponent } from './players/players.component'
import { GenericReport2Component } from './generic-report2/generic-report2.component'
import { ThingDetailComponent } from './thing-detail/thing-detail.component'
import { ThingDetailGuard } from './guards/thing-detail-guard'

import { FaqComponent } from './faq/faq.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

import { ContactComponent } from './contact/contact.component';
import { HowitworksComponent } from './howitworks/howitworks.component'



import { Error404Component } from './errors/404.component'


import { MainComponent } from './main/main.component';
import { WeeklyTransactionsComponent } from './weekly-transactions/weekly-transactions.component';
import { WeeklyBalancesComponent } from './weekly-balances/weekly-balances.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { WeeklyPaymentsComponent } from './weekly-payments/weekly-payments.component';
import { AgentExposureComponent } from './agent-exposure/agent-exposure.component';
import { AgentPositionComponent } from './agent-position/agent-position.component';
import { AgentCommissionComponent } from './agent-commission/agent-commission.component';
import { PlayerStandingComponent } from './player-standing/player-standing.component';
import { ActionByPlayerComponent } from './action-by-player/action-by-player.component';
import { PlayerTotalsComponent } from './player-totals/player-totals.component';
import { PlayerStandingsComponent } from './player-standings/player-standings.component';

import { PlayerOpenBetsComponent } from './player-open-bets/player-open-bets.component';
import { PlayerHistoryComponent } from './player-history/player-history.component';
import { MarketingComponent } from './marketing/marketing.component'


export const appRoutes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'things', component: ThingsComponent },
    { path:'wagers', component: WagersComponent },

    { path:'howitworks', component: HowitworksComponent },
    { path:'FAQ', component: FaqComponent },
    { path:'ToS', component: TermsOfServiceComponent },
    { path:'contactus', component: ContactComponent },
    { path:'players', component: PlayersComponent },
    { path:'genericReport2', component: GenericReport2Component },
    { path:'', redirectTo: '/home', pathMatch:'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: '404', component: Error404Component },
    { path: 'thing/:id',canActivate: [ ThingDetailGuard],component: ThingDetailComponent },


    { path:'main', component: MainComponent },
    { path:'weeklyTransactions', component: WeeklyTransactionsComponent },
    { path:'weeklyBalances', component: WeeklyBalancesComponent },
    { path:'cashFlow', component: CashFlowComponent },
    { path:'weeklyPayments', component: WeeklyPaymentsComponent },
    { path:'agentExposure', component: AgentExposureComponent },
    { path:'agentPosition', component: AgentPositionComponent },
    { path:'agentCommission', component: AgentCommissionComponent },
    { path:'playerStandings', component: PlayerStandingComponent },
    { path:'actionByPlayer', component: ActionByPlayerComponent },
    { path:'playerTotals', component: PlayerTotalsComponent },
    { path:'playerOpenBets', component: PlayerOpenBetsComponent },
    { path:'playerHistory', component: PlayerHistoryComponent },
    { path:'marketing', component: MarketingComponent },



]