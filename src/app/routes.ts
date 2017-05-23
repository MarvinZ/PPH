import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThingsComponent } from './things/things.component';
import { WagersComponent } from './wagers/wagers.component';
import { PlayersComponent } from './players/players.component';
import { GenericReport2Component } from './generic-report2/generic-report2.component';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';
import { ThingDetailGuard } from './guards/thing-detail-guard';
import { FaqComponent } from './faq/faq.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { TermsOfServicePphComponent } from './terms-of-service-pph/terms-of-service-pph.component';
import { ContactComponent } from './contact/contact.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { Error404Component } from './errors/404.component';
import { MainComponent } from './main/main.component';
import { WeeklyTransactionsComponent } from './weekly-transactions/weekly-transactions.component';
import { WeeklyBalancesComponent } from './weekly-balances/weekly-balances.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { WeeklyPaymentsComponent } from './weekly-payments/weekly-payments.component';
import { AgentExposureComponent } from './agent-exposure/agent-exposure.component';
import { AgentPositionComponent } from './agent-position/agent-position.component';
import { AgentCommissionComponent } from './agent-commission/agent-commission.component';
import { PlayerStandingComponent } from './player-standing/player-standing.component';
import { GrossWeekComponent } from './gross-week/gross-week.component';
import { ActionByPlayerComponent } from './action-by-player/action-by-player.component';
import { PlayerTotalsComponent } from './player-totals/player-totals.component';
import { PlayerStandingsComponent } from './player-standings/player-standings.component';
import { HoldPercentageComponent } from './hold-percentage/hold-percentage.component';
import { PlayerOpenBetsComponent } from './player-open-bets/player-open-bets.component';
import { PlayerHistoryComponent } from './player-history/player-history.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MyBannersComponent, MyBannersModalComponent } from './my-banners/my-banners.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPphComponent } from './sign-up-pph/sign-up-pph.component';
import { DemoComponent } from './demo/demo.component';
import { SigningUpComponent } from './signing-up/signing-up.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaymentsComponent } from './payments/payments.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WebVsPhoneComponent } from './web-vs-phone/web-vs-phone.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { SettledFiguresComponent } from './settled-figures/settled-figures.component';
import { AgentHistoryComponent } from './agent-history/agent-history.component';
import { AgentDistributionComponent } from './agent-distribution/agent-distribution.component';
import { AgentAdjustmentsComponent } from './agent-adjustments/agent-adjustments.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { CardTransactionsComponent } from './card-transactions/card-transactions.component';
import { BeatTheLineComponent } from './beat-the-line/beat-the-line.component';
import { PlatinumLiveWagerComponent } from './platinum-live-wager/platinum-live-wager.component';
import { LiveWagerTransactionsComponent } from './live-wager-transactions/live-wager-transactions.component';
import { PlayerAccessComponent } from './player-access/player-access.component';
import { PlayerCountComponent } from './player-count/player-count.component';
import { PlayerIpComponent } from './player-ip/player-ip.component';
import { CrossIpComponent } from './cross-ip/cross-ip.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { ChangedWagersComponent } from './changed-wagers/changed-wagers.component';
import { WagerRiskComponent } from './wager-risk/wager-risk.component';
import { WagerListingComponent } from './wager-listing/wager-listing.component';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import { PreAffiliatesComponent } from './pre-affiliates/pre-affiliates.component';
import { AffiliatesAdminComponent } from './affiliates-admin/affiliates-admin.component';
import { DepositsAndWithdrawalsComponent } from './deposits-and-withdrawals/deposits-and-withdrawals.component'

import { OnlineMessagesComponent } from './online-messages/online-messages.component'

import { AgentPaymentsComponent } from './agent-payments/agent-payments.component'

import { BannerFarmComponent } from './banner-farm/banner-farm.component'
import { AdCenterComponent } from './ad-center/ad-center.component'

import { MyAgentsComponent } from './my-agents/my-agents.component'

import { EventsCalendarComponent } from './events-calendar/events-calendar.component'


export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'things', component: ThingsComponent },
    { path: 'wagers', component: WagersComponent },
    { path: 'howitworks', component: HowitworksComponent },
    { path: 'FAQ', component: FaqComponent },
    { path: 'ToS', component: TermsOfServiceComponent },
    { path: 'ToSpph', component: TermsOfServicePphComponent },
    { path: 'contactus', component: ContactComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'genericReport2', component: GenericReport2Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '404', component: Error404Component },
    { path: 'thing/:id', canActivate: [ThingDetailGuard], component: ThingDetailComponent },
    { path: 'main', component: MainComponent },
    { path: 'weeklyTransactions', component: WeeklyTransactionsComponent },
    { path: 'weeklyBalances', component: WeeklyBalancesComponent },
    { path: 'grossWeek', component: GrossWeekComponent },
    { path: 'cashFlow', component: CashFlowComponent },
    { path: 'holdPercentage', component: HoldPercentageComponent },
    { path: 'weeklyPayments', component: WeeklyPaymentsComponent },
    { path: 'agentExposure', component: AgentExposureComponent },
    { path: 'agentPosition', component: AgentPositionComponent },
    { path: 'agentCommission', component: AgentCommissionComponent },
    { path: 'playerStandings', component: PlayerStandingComponent },
    { path: 'actionByPlayer', component: ActionByPlayerComponent },
    { path: 'playerTotals', component: PlayerTotalsComponent },
    { path: 'playerOpenBets', component: PlayerOpenBetsComponent },
    { path: 'playerHistory', component: PlayerHistoryComponent },
    { path: 'playerLiveWagerTransactions', component: LiveWagerTransactionsComponent },
    { path: 'playerAccess', component: PlayerAccessComponent },
    { path: 'playerCount', component: PlayerCountComponent },
    { path: 'playerIP', component: PlayerIpComponent },
    { path: 'crossIP', component: CrossIpComponent },
    { path: 'topPlayers', component: TopPlayersComponent },
    { path: 'marketing', component: MarketingComponent },
    { path: 'myBanners', component: MyBannersComponent },
    { path: 'webVsPhone', component: WebVsPhoneComponent },
    { path: 'monthlySummary', component: MonthlySummaryComponent },
    { path: 'settledFigures', component: SettledFiguresComponent },
    { path: 'agentHistory', component: AgentHistoryComponent },
    { path: 'agentDistribution', component: AgentDistributionComponent },
    { path: 'agentadjustment', component: AgentAdjustmentsComponent },
    { path: 'agentAccessLog', component: AccessLogComponent },
    { path: 'agentCardTransactions', component: CardTransactionsComponent },
    { path: 'agentBeatTheLine', component: BeatTheLineComponent },
    { path: 'platinumLiveWager', component: PlatinumLiveWagerComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'signuppph', component: SignUpPphComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'signingUp', component: SigningUpComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'payments', component: PaymentsComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'changedWagers', component: ChangedWagersComponent },
    { path: 'RiskReport', component: WagerRiskComponent },
    { path: 'wagerListing', component: WagerListingComponent },
    { path: 'dailySummary', component: DailySummaryComponent },
    { path: 'preAffiliates', component: PreAffiliatesComponent },
    { path: 'affiliatesAdmin', component: AffiliatesAdminComponent },
    { path: 'depositsandWithdrawals', component: DepositsAndWithdrawalsComponent },
    { path: 'onlineMessages', component: OnlineMessagesComponent },
    { path: 'agentPayments', component: AgentPaymentsComponent },
    { path: 'bannerFarm', component: BannerFarmComponent },
    { path: 'calendar', component: EventsCalendarComponent },
    { path: 'adcenter', component: AdCenterComponent },
    { path: 'myAgents', component: MyAgentsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component },


]