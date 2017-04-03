import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { Banner } from './../models/banner';
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { } from '../../../ng2-file-upload';




// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-banner-farm',
  templateUrl: './banner-farm.component.html',
  styleUrls: ['./banner-farm.component.css']
})
export class BannerFarmComponent extends Localization implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: Boolean = false;
  isEditMode: Boolean = false;
  showBannerPreview: Boolean = false;
  customSize: Boolean = false;
  imgHeight: number = 250;
  imgWidth: number = 250;

  bannerId?: number;

  ddlBannerType: string = 'Static'
  ddlBook: string = 'Jazz'
  ddlSports: string = 'NFL'
  ddlLanguages: string = 'English'

  ddlBannerTypeFilter: string = 'All'
  ddlBookFilter: string = 'All'
  ddlSportsFilter: string = 'All'
  ddlLanguagesFilter: string = 'All'

  bannerTypesFilter: any = []
  languagesFilter: any = []
  booksFilter: any = []
  sportsfilter: any = []

  imgUrl: string = 'http:\\\\'

  public uploader: FileUploader = new FileUploader({ url: URL, isHTML5: true });
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

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

  // public banners = [
  //   { sport: 'NFL', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'MU', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'MLB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'CBB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'CFB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'PROP', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'CBB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  //   { sport: 'NBA', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  // ];

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
    // if (!this.auth.currentUser) {
    //   this.router.navigate(['/user/adminLogin']);
    // }
    for (let i = 1; i <= 120; i++) {
      let ban = new Banner();
      ban.bannerId = i;
      ban.bannerTitle = 'A title -> ' + i;
      ban.bannerType = i % 2 == 0 ? 'Dynamic' : 'Static';
      ban.book = i % 3 == 0 ? 'Jazz' : 'ABC';
      ban.description = 'Random generated description';
      ban.language = i % 5 == 0 ? 'English' : 'Español';
      ban.sport = i % 4 == 0 ? 'MLB' : 'NFL';
      ban.imageUrl = 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg';
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

  goToEditMode(banner?: Banner) {
    if (banner) {
      this.bannerId = banner.bannerId;
      this.imgUrl = banner.imageUrl;
      this.ddlBannerType = this.bannerTypes.find(e => e.display == banner.bannerType).value
      this.ddlLanguages = this.languages.find(e => e.display == banner.language).value
      this.ddlBook = this.books.find(e => e.display == banner.book).value
      this.ddlSports = banner.sport;
      this.showBannerPreview = true;
    }
    this.isEditMode = !this.isEditMode;
  }
  // go() {
  //   this.response = null;
  //   this.loading = true;
  //   //  let startDate = this.dateModel.beginDate.year + '-' + this.dateModel.beginDate.month + '-' + this.dateModel.beginDate.day;
  //   // let endDate = this.dateModel.endDate.year + '-' + this.dateModel.endDate.month + '-' + this.dateModel.endDate.day;

  //   let t0 = performance.now();
  //   this.affiliateService.GetWeeklyTransactions(this.auth.currentUser.id, this.dateModel.date.year + '-' + this.dateModel.date.month + '-' + this.dateModel.date.day)
  //     .subscribe(response => {
  //       this.response = response;
  //       this.loading = false;

  //       console.log(this.response);
  //       let t1 = performance.now();
  //       this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
  //     },
  //     error => this.errorMessage = <any>error);
  // }


  showPreview() {
    if (this.imgUrl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      this.showBannerPreview = true;
    }
    else {
      this.showBannerPreview = false;
    }
  }

  add(control: string) {
    if (control === 'imgWidth')
      this.imgWidth++;
    if (control === 'imgHeight')
      this.imgHeight++;
  }

  minus(control: string) {
    if (control === 'imgWidth')
      this.imgWidth--;
    if (control === 'imgHeight')
      this.imgHeight--;
  }


  save() {

    if (this.showBannerPreview) {
      let ban = new Banner();
      ban.bannerId = this.bannerId;
      ban.bannerTitle = 'A title';
      ban.bannerType = this.ddlBannerType;
      ban.book = this.ddlBook;
      ban.description = 'bla  bla bla bla';
      ban.language = this.ddlLanguages;
      ban.sport = this.ddlSports;
      ban.imageUrl = this.imgUrl;

      this.banners.push(ban);
      this.toastr.success('Your banner has been created!', 'Success');

    }
    else {
      this.toastr.error('Please enter a valid image url', 'Error')
    }

  }

  goBack() {
    this.customSize = false;
    this.imgHeight = 250;
    this.imgWidth = 250;
    this.ddlBannerType = '1'
    this.ddlBook = '1'
    this.ddlSports = 'NFL'
    this.ddlLanguages = '1'
    this.imgUrl = 'http:\\\\'
    this.isEditMode = false;

  }

  deactivateBanner() {
    alert('deactivate banner needs some code!');
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


  upload() {
    this.uploader.queue[0].upload();
    alert('yeyyyyyyy');
  }
}  //end of class

