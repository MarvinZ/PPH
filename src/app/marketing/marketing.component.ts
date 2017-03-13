import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  //	private dateModel: any
  loading: boolean = false;

  // ddlSports :string
  // ddlTransType: string
  // ddlCurrency: string

  // public sports  = [
  // 	{ value: 'NFL', display: 'NFL' },
  // 	{ value: 'MU', display: 'MU' },
  // 	{ value: 'MLB', display: 'MLB' },
  // 	{ value: 'CBB', display: 'CBB' },
  // 	{ value: 'CFB', display: 'CFB' },
  // 	{ value: 'PROP', display: 'PROP' },
  // 	{ value: 'CBB', display: 'CBB' },
  // 	{ value: 'NBA', display: 'NBA' },
  // 	{ value: 'SOC', display: 'SOC' },
  // 	{ value: 'TNT', display: 'TNT' },
  // 	{ value: 'NHL', display: 'NHL' },
  // 	{ value: 'ALL', display: 'ALL' }
  // ];

  public banners = [
    { sport: 'NFL', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'MU', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'MLB', display: 'horizontal', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'CBB', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'CFB', display: 'horizontal', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'PROP', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'CBB', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'NBA', display: 'horizontal', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'SOC', display: 'horizontal', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'TNT', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'NHL', display: 'vertical', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'NBA', display: 'horizontal', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' }
  ];

  // public currencies = [
  // 	{ value: '1', display: 'USD' },
  // 	{ value: '2', display: 'MXN' },
  // 	{ value: '3', display: 'GBP' },
  // 	{ value: '4', display: 'EUR' }
  // ];

  // public transactionTypes = [
  // 	{ value: '-1', display: 'All' },
  // 	{ value: '0', display: 'Sports' },
  // 	{ value: '1', display: 'Casino' },
  // 	{ value: '2', display: 'Racing' }
  // ];
  // private model2: Object = {
  // 	beginDate: { year: 2018, month: 10, day: 9 },
  // 	endDate: { year: 2018, month: 10, day: 19 }
  // };
  response: any
  errorMessage: string
  constructor(private affiliateService: AffiliateService, public toastr: ToastsManager, private router: Router,
    public vcr: ViewContainerRef, public locale: LocaleService,
    public translation: TranslationService, private auth: AuthService) {
    super(locale, translation);
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    if (!this.auth.currentUser) {
      this.router.navigate(['/user/login']);
    }
    // let currentDate = new Date();
    // let day = currentDate.getDate();
    // let month = currentDate.getMonth() + 1;
    // let year = currentDate.getFullYear();
    // this.dateModel = { date: { year: year, month: month, day: day } };
  }


}
