import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileUploadModule } from "ng2-file-upload";


import { AppComponent } from './app.component';
import { AlertModule, DropdownModule, AccordionModule, CarouselModule } from 'ng2-bootstrap';


import { ToastModule } from 'ng2-toastr/ng2-toastr';


import { HomeComponent } from './home/home.component';
import { ThingsComponent } from './things/things.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { ThingService } from './services/thing.service'
import { ContactService } from './services/contact.service'
import { ReportService } from './services/report.service'
import { AffiliateService } from './services/affiliate.service'

import { CommentService } from './services/commentX.service'
import { EmitterService } from './services/emitter.service'

import { ChatService } from './services/chat.service';
import { WebSocketService } from './services/websocket.service';



import { ThingDetailGuard } from './guards/thing-detail-guard'


import { LocalizationModule } from 'angular-l10n';
import { CashFlowFilterPipe } from './filters/cash-flow-filter.pipe'

import { ThingFilterPipe } from './filters/thing-filter.pipe'

import { } from './models'

import { PlayersComponent } from './players/players.component'
import { GenericReport2Component } from './generic-report2/generic-report2.component';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';
import { StarComponent } from './star/star.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { WagersComponent } from './wagers/wagers.component';
import { MainComponent } from './main/main.component';
import { WeeklyTransactionsComponent } from './weekly-transactions/weekly-transactions.component';
import { WeeklyBalancesComponent } from './weekly-balances/weekly-balances.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { WeeklyPaymentsComponent } from './weekly-payments/weekly-payments.component';
import { AgentExposureComponent, ExposureModalComponent } from './agent-exposure/agent-exposure.component';
import { AgentPositionComponent } from './agent-position/agent-position.component';
import { AgentCommissionComponent } from './agent-commission/agent-commission.component';
import { PlayerStandingComponent } from './player-standing/player-standing.component';
import { ActionByPlayerComponent } from './action-by-player/action-by-player.component';
import { PlayerTotalsComponent } from './player-totals/player-totals.component';
import { PlayerOpenBetsComponent } from './player-open-bets/player-open-bets.component';
import { PlayerHistoryComponent } from './player-history/player-history.component';
import { MarketingComponent, MarketingModalComponent } from './marketing/marketing.component';
import { MyBannersComponent, MyBannersModalComponent } from './my-banners/my-banners.component';

import { PlayerStandingsComponent } from './player-standings/player-standings.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { TermsOfServicePphComponent } from './terms-of-service-pph/terms-of-service-pph.component';

import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { DatePickerModule } from 'ng2-datepicker';




import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPphComponent } from './sign-up-pph/sign-up-pph.component';

import { DemoComponent, DemoModalComponent } from './demo/demo.component';
import { SigningUpComponent } from './signing-up/signing-up.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaymentsComponent } from './payments/payments.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HoldPercentageComponent } from './hold-percentage/hold-percentage.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { SettledFiguresComponent } from './settled-figures/settled-figures.component';
import { WebVsPhoneComponent } from './web-vs-phone/web-vs-phone.component';
import { AgentDistributionComponent } from './agent-distribution/agent-distribution.component';
import { AgentHistoryComponent } from './agent-history/agent-history.component';

import { SafePipe } from './safe-pipe.pipe';
import { AgentAdjustmentsComponent } from './agent-adjustments/agent-adjustments.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { CardTransactionsComponent } from './card-transactions/card-transactions.component';
import { BeatTheLineComponent } from './beat-the-line/beat-the-line.component';
import { PlatinumLiveWagerComponent } from './platinum-live-wager/platinum-live-wager.component';
import { ReportTemplateComponent } from './report-template/report-template.component';
import { LiveWagerTransactionsComponent } from './live-wager-transactions/live-wager-transactions.component';
import { PlayerAccessComponent } from './player-access/player-access.component';
import { PlayerCountComponent } from './player-count/player-count.component';
import { PlayerIpComponent } from './player-ip/player-ip.component';
import { CrossIpComponent } from './cross-ip/cross-ip.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { GrossWeekComponent } from './gross-week/gross-week.component';
import { ChangedWagersComponent } from './changed-wagers/changed-wagers.component';
import { WagerRiskComponent } from './wager-risk/wager-risk.component';
import { WagerListingComponent } from './wager-listing/wager-listing.component';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import { LoadingComponent } from './loading/loading.component';
import { PreAffiliatesComponent } from './pre-affiliates/pre-affiliates.component';
import { AffiliatesAdminComponent } from './affiliates-admin/affiliates-admin.component'

import { DepositsAndWithdrawalsComponent } from './deposits-and-withdrawals/deposits-and-withdrawals.component'
import { ReCaptchaModule } from 'angular2-recaptcha';

import { EventsCalendarComponent } from './events-calendar/events-calendar.component'
import { OnlineMessagesComponent } from './online-messages/online-messages.component'


import { AgentPaymentsComponent } from './agent-payments/agent-payments.component'

import { BannerFarmComponent, BannerModalComponent } from './banner-farm/banner-farm.component'

import { AdCenterComponent } from './ad-center/ad-center.component'

import { MyAgentsComponent } from './my-agents/my-agents.component'

import { FooterComponent } from './footer/footer.component'

import { ClipboardModule } from 'ngx-clipboard';
import { QRCodeModule } from 'angular2-qrcode';

import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';

import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThingsComponent,
    NavComponent,
    PlayersComponent,
    GenericReport2Component,
    Error404Component,
    ThingFilterPipe,
    CashFlowFilterPipe,
    ThingDetailComponent,
    StarComponent,
    FaqComponent,
    ContactComponent,
    HowitworksComponent,
    WagersComponent,
    MainComponent,
    WeeklyTransactionsComponent,
    WeeklyBalancesComponent,
    CashFlowComponent,
    WeeklyPaymentsComponent,
    AgentExposureComponent, ExposureModalComponent,
    AgentPositionComponent,
    AgentCommissionComponent,
    PlayerStandingComponent,
    ActionByPlayerComponent,
    PlayerTotalsComponent,
    PlayerOpenBetsComponent,
    PlayerHistoryComponent,
    MarketingComponent, MarketingModalComponent,
    PlayerStandingsComponent,
    TermsOfServiceComponent,
    TermsOfServicePphComponent,
    SignUpComponent,
    SignUpPphComponent,
    DemoComponent, DemoModalComponent,
    SigningUpComponent,
    GalleryComponent,
    PaymentsComponent,
    AboutUsComponent,
    HoldPercentageComponent,
    MonthlySummaryComponent,
    SettledFiguresComponent,
    WebVsPhoneComponent,
    AgentDistributionComponent,
    AgentHistoryComponent,
    SafePipe,
    AgentAdjustmentsComponent,
    AccessLogComponent,
    CardTransactionsComponent,
    BeatTheLineComponent,
    PlatinumLiveWagerComponent,
    ReportTemplateComponent,
    LiveWagerTransactionsComponent,
    PlayerAccessComponent,
    PlayerCountComponent,
    PlayerIpComponent,
    CrossIpComponent,
    TopPlayersComponent,
    GrossWeekComponent,
    ChangedWagersComponent,
    WagerRiskComponent,
    WagerListingComponent,
    DailySummaryComponent,
    LoadingComponent,
    PreAffiliatesComponent,
    AffiliatesAdminComponent,
    DepositsAndWithdrawalsComponent,
    OnlineMessagesComponent,
    AgentPaymentsComponent,
    BannerFarmComponent, BannerModalComponent,
    AdCenterComponent,
    MyAgentsComponent,
    MyBannersComponent, MyBannersModalComponent,
    FooterComponent,
    EventsCalendarComponent
  ],
  imports: [
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    ToastModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LocalizationModule.forRoot(),
    MyDatePickerModule,
    MyDateRangePickerModule,
    BrowserAnimationsModule,
    ReCaptchaModule,
    FileUploadModule,
    ClipboardModule,
    QRCodeModule,
    DatePickerModule,
    UiSwitchModule,
    CalendarModule.forRoot()


  ],
  providers: [
    AuthService,
    ThingService,
    ThingDetailGuard,
    ReportService,
    CommentService,
    EmitterService,
    WebSocketService,
    ChatService,
    AffiliateService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
