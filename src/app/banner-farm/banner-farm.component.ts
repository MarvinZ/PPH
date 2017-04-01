import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'

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
  loading: boolean = false;
  isEditMode: Boolean = false;
  showPreview: Boolean = false;

  customSize: boolean = false;
  imgHeight: number = 250;
  imgWidth: number = 250;



  // ddlSports :string = 'NFL'
  ddlBannerType: string = '1'
  ddlBook: string = '1'
  ddlSports: string = 'NFL'
  ddlLanguages: string = '1'

  imgUrl: string = 'http:\\'




  public bannerTypes = [
    { value: '1', display: 'Static' },
    { value: '2', display: 'Dynamic' }
  ];

  public languages = [
    { value: '1', display: 'English' },
    { value: '2', display: 'Español' }
  ];

  public books = [
    { value: '1', display: 'Jazz' },
    { value: '2', display: 'ABC' }
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
    { value: 'NHL', display: 'NHL' },
    { value: 'All', display: 'ALL' }
  ];

  public banners = [
    { sport: 'NFL', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'MU', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'MLB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'CBB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'CFB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'PROP', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'CBB', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
    { sport: 'NBA', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/', source: 'http://www.jazzsports.ag/images/sportsbook/sportsbook-promo.jpg' },
  ];

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
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    this.dateModel = { date: { year: year, month: month, day: day } };

    //  let currentDateStart = new Date();
    // currentDateStart.setDate(currentDateStart.getDate() - 7);

    // let day2 = currentDateStart.getDate();
    // let month2 = currentDateStart.getMonth() + 1;
    // let year2 = currentDateStart.getFullYear();

    // this.dateModel = {
    //   beginDate: { year: year2, month: month2, day: day2 },
    //   endDate: { year: year, month: month, day: day }
    // };

  }


  goToEditMode(banner?:any) {
    if (banner) {
      this.imgUrl = banner.source;
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

  preview() {
    this.showPreview = !this.showPreview;

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
    /*
      // ddlSports :string = 'NFL'
  ddlBannerType: string = '1'
  ddlBook: string = '1'
  ddlSports: string = 'NFL'
  ddlLanguages: string = '1'

*/
    this.banners.push({ sport: this.ddlSports, url: 'https://www.draftkings.com/', source: this.imgUrl })
    alert('yeyyy');
  }

}  //end of class

