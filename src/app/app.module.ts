import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { AlertModule, DropdownModule, AccordionModule,CarouselModule   } from 'ng2-bootstrap';


import {ToastModule} from 'ng2-toastr/ng2-toastr';


import { HomeComponent } from './home/home.component';
import { ThingsComponent } from './things/things.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { ThingService } from './services/thing.service'
import { ReportService } from './services/report.service'
import { AffiliateService } from './services/affiliate.service'

import { CommentService } from './services/commentX.service'
import { EmitterService } from './services/emitter.service'

import {ChatService} from './services/chat.service';
import {WebSocketService} from './services/websocket.service';



import { ThingDetailGuard } from './guards/thing-detail-guard'


import { LocalizationModule } from 'angular-l10n';

import { ThingFilterPipe } from './filters/thing-filter.pipe'

import {} from './models'

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
import { AgentExposureComponent } from './agent-exposure/agent-exposure.component';
import { AgentPositionComponent } from './agent-position/agent-position.component';
import { AgentCommissionComponent } from './agent-commission/agent-commission.component';
import { PlayerStandingComponent } from './player-standing/player-standing.component';
import { ActionByPlayerComponent } from './action-by-player/action-by-player.component';
import { PlayerTotalsComponent } from './player-totals/player-totals.component';
import { PlayerOpenBetsComponent } from './player-open-bets/player-open-bets.component';
import { PlayerHistoryComponent } from './player-history/player-history.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PlayerStandingsComponent } from './player-standings/player-standings.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component'

import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { AffiliateSignUpComponent } from './affiliate-sign-up/affiliate-sign-up.component';
import { DemoComponent } from './demo/demo.component';
import { SigningUpComponent } from './signing-up/signing-up.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaymentsComponent } from './payments/payments.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HoldPercentageComponent } from './hold-percentage/hold-percentage.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { SettledFiguresComponent } from './settled-figures/settled-figures.component';
import { WebVsPhoneComponent } from './web-vs-phone/web-vs-phone.component';





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
    AgentExposureComponent,
    AgentPositionComponent,
    AgentCommissionComponent,
    PlayerStandingComponent,
    ActionByPlayerComponent,
    PlayerTotalsComponent,
    PlayerOpenBetsComponent,
    PlayerHistoryComponent,
    MarketingComponent,
    PlayerStandingsComponent,
    TermsOfServiceComponent,
    AffiliateSignUpComponent,
    DemoComponent,
    SigningUpComponent,
    GalleryComponent,
    PaymentsComponent,
    AboutUsComponent,
    HoldPercentageComponent,
    MonthlySummaryComponent,
    SettledFiguresComponent,
    WebVsPhoneComponent
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
    MyDateRangePickerModule 
    
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
        AffiliateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
