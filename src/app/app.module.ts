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
import { CommentService } from './services/commentX.service'
import { EmitterService } from './services/emitter.service'


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
import { WagersComponent } from './wagers/wagers.component'



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
    WagersComponent
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
    LocalizationModule.forRoot()
  ],
  providers: [    
        AuthService,
        ThingService,
        ThingDetailGuard,
        ReportService,
        CommentService,
        EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
