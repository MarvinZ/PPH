import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { Banner } from './../models/banner';



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

  ddlBannerTypeFilter: string = 'All'
  ddlBookFilter: string = 'All'
  ddlSportsFilter: string = 'All'
  ddlLanguagesFilter: string = 'All'

  bannerTypesFilter: any = []
  languagesFilter: any = []
  booksFilter: any = []
  sportsfilter: any = []


  public bannerTypes = [
    { value: 'Static', display: 'Static' },
    { value: 'Dynamic', display: 'Dynamic' },

  ];

  public languages = [
    { value: 'English', display: 'English' },
    { value: 'Español', display: 'Español' }
  ];

  public books = [
    { value: 'Jazz', display: 'Jazz' },
    { value: 'ABC', display: 'ABC' }
  ];


  public sports = [
    { value: 'NFL', display: 'NFL' },
    { value: 'MU', display: 'MU' },
    { value: 'MLB', display: 'MLB' },
    { value: 'CBB', display: 'CBB' },
    { value: 'CFB', display: 'CFB' },
    { value: 'PROP', display: 'PROP' },
    { value: 'CBB', display: 'CBB' },
    { value: 'NBA', display: 'NBA' },
    { value: 'SOC', display: 'SOC' },
    { value: 'TNT', display: 'TNT' },
    { value: 'NHL', display: 'NHL' }
  ];


  public banners: Banner[] = [];
  public bannersToDisplay: Banner[] = [];
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

 for (let i = 1; i <= 120; i++) {
      let ban = new Banner();
      ban.bannerId = i;
      ban.bannerTitle = 'A title -> ' + i;
      ban.bannerType = i % 2 == 0 ? 'Dynamic' : 'Static';
      ban.book = i % 3 == 0 ? 'Jazz' : 'ABC';
      ban.description = 'Random generated description';
      ban.language = i % 5 == 0 ? 'English' : 'Español';
      ban.sport = i % 4 == 0 ? 'MLB' : 'NFL';
      ban.imageUrl = i % 2 == 0 ? 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg':  i % 3 == 0 ? 'http://www.aestheticsofessex.co.uk/wp-content/uploads/2016/05/Liposuction-2.png' : i % 5 == 0 ? 'http://noahjags.org/wp-content/uploads/2014/04/Volleyball-banner.jpg':'http://questgarden.com/97/47/3/100301103814/images/Olympic%20Truce%20Emblem.jpg';
      this.banners.push(ban);
    }
    this.bannersToDisplay = this.banners;

    this.sportsfilter = this.sports.slice();
    this.sportsfilter.push({ value: 'All', display: 'All' });

    this.booksFilter = this.books.slice();
    this.booksFilter.push({ value: 'All', display: 'All' });

    this.languagesFilter = this.languages.slice();
    this.languagesFilter.push({ value: 'All', display: 'All' });

    this.bannerTypesFilter = this.bannerTypes.slice();
    this.bannerTypesFilter.push({ value: 'All', display: 'All' });


  }


   onChangeBannerTypeFilter() {
    this.loading = true;
    this.bannersToDisplay = this.banners.filter(e => (e.bannerType === this.ddlBannerTypeFilter || this.ddlBannerTypeFilter === 'All')
      && (e.language === this.ddlLanguagesFilter || this.ddlLanguagesFilter === 'All')
      && (e.sport === this.ddlSportsFilter || this.ddlSportsFilter === 'All')
      && (e.book === this.ddlBookFilter || this.ddlBookFilter === 'All'))
    this.loading = false;


  }


  clearFilters() {
    this.bannersToDisplay = this.banners;
    this.ddlBannerTypeFilter = 'All'
    this.ddlBookFilter = 'All'
    this.ddlSportsFilter = 'All'
    this.ddlLanguagesFilter = 'All'
  }





}
