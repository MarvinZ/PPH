import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { AlertModule, DropdownModule, AccordionModule  } from 'ng2-bootstrap';


import {ToastModule} from 'ng2-toastr/ng2-toastr';


import { HomeComponent } from './home/home.component';
import { ThingsComponent } from './things/things.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { ThingService } from './services/thing.service'
import { ReportService } from './services/report.service'

import { ThingDetailGuard } from './guards/thing-detail-guard'


import { LocalizationModule } from 'angular-l10n';

import { ThingFilterPipe } from './filters/thing-filter.pipe'

import {} from './models'

import { GenericReportComponent } from './generic-report/generic-report.component'
import { GenericReport2Component } from './generic-report2/generic-report2.component';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';
import { StarComponent } from './star/star.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThingsComponent,
    NavComponent,
    GenericReportComponent,
    GenericReport2Component,
    Error404Component,
    ThingFilterPipe,
    ThingDetailComponent,
    StarComponent
  ],
  imports: [
    AlertModule.forRoot(), 
    DropdownModule.forRoot(),
    AccordionModule.forRoot()
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
        ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
