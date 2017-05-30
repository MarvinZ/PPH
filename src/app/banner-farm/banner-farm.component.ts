import { Component, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { AuthService } from '../user/auth.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';

import { Router } from '@angular/router'
import { Banner } from './../models/banner';
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { } from '../../../ng2-file-upload';



// const URL = 'http://localhost:40939/api/Image?site='
const URL = 'http://panmora.com/twapi/api/image/Upload?site='


@Component({
  selector: 'app-banner-farm',
  templateUrl: './banner-farm.component.html',
  styleUrls: ['./banner-farm.component.css']
})
export class BannerFarmComponent extends Localization implements OnInit {
  @ViewChild('BannerModalComponent')
  public readonly modal: BannerModalComponent
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private dateModel: any
  loading: Boolean = false;
  isEditMode: Boolean = false;
  showBannerPreview: Boolean = false;
  customSize: Boolean = false;
  isCopied1: boolean = false;

  imgHeight: number = 250;
  imgWidth: number = 250;

  bannerId?: number;

  ddlBannerType: string = 'Static'
  ddlBook: string = 'Jazz'
  ddlSports: string = 'NFL'
  ddlLanguages: string = 'English'

  ddlBannerTypeFilter: string = 'All'
  ddlBookFilter: string = '0'
  ddlSportsFilter: string = 'All'
  ddlLanguagesFilter: string = 'All'

  bannerTypesFilter: any = []
  languagesFilter: any = []
  booksFilter: any = []
  sportsfilter: any = []

  imgUrl: string = 'http:\\\\'

  targetUrl: string = 'http:\\\\'
  newImgUrl: string = 'http:\\\\'

  public uploader: FileUploader = new FileUploader({ url: URL + this.ddlBook, isHTML5: true });
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public bannerTypes = [
    { value: 'STATIC', display: 'Static' },
    { value: 'DYNAMIC', display: 'Dynamic' },

  ];

  public languages = [
    { value: '0', display: 'English' },
    { value: '1', display: 'Español' }
  ];

  public books = [
    { value: '3', display: 'Jazz', url: 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/' },
    { value: '4', display: 'ABC', url: 'http://signup.abcislands.ag/abc_signupnew.aspx' },
    { value: '1', display: 'Looselines', url: 'http://signup.looselines.ag/ll_Signup.aspx' }

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

  public realBannersABC = [
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC120x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC120x600.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC160x300.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC160x600.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC234x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC250x250.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC300x300.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC728x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/AbcislandsBanners/ABC728x90.gif' },
  ]
  public realBannerLooselines = [

    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-120x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-234x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-250x250.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-300x160.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-300x300.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-468x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-500x160.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-728x60.gif' },
    { url: 'http://media.Betimages.com/media/banner/LooselinesBanners/LL-728x90.gif' }
  ]
  response: any
  response2: any

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



    this.sportsfilter = this.sports.slice();
    this.sportsfilter.push({ value: 'All', display: 'All' });

    this.booksFilter = this.books.slice();
    this.booksFilter.push({ value: '0', display: 'All' });

    this.languagesFilter = this.languages.slice();
    this.languagesFilter.push({ value: 'All', display: 'All' });

    this.bannerTypesFilter = this.bannerTypes.slice();
    this.bannerTypesFilter.push({ value: 'All', display: 'All' });

    this.ddlBannerType = 'Static'
    this.ddlBook = '0'
    this.ddlSports = 'NFL'
    this.ddlLanguages = 'English'

    //  this.targetUrl = this.books.find(e => e.value == this.ddlBook).url;

    this.response = null;
    this.loading = true;

    let t0 = performance.now();
    //   this.toastr.error('Not implemented', 'Error!');
    this.affiliateService.GetBannerInfoByBannerCode('', '', 'abc', 1, '')
      .subscribe(response => {
        this.response = response;
        this.banners = this.response;
        this.bannersToDisplay = this.banners;
        this.loading = false;

        // console.log(this.response);
        let t1 = performance.now();
        // this.toastr.success('This query took ' + (t1 - t0) + ' milliseconds..', 'Success');
      },
      error => this.errorMessage = <any>error);
  }

  goToEditMode(banner?: Banner) {
    if (banner) {
      this.bannerId = banner.IdBanner;
      this.imgUrl = banner.ImageUrl;
      this.ddlBannerType = this.bannerTypes.find(e => e.display == banner.BannerType).value
      // this.ddlLanguages = this.languages.find(e => e.display == banner.LanguageId).value
      this.ddlBook = this.books.find(e => e.value == banner.IdBook.toString()).value
      // this.ddlSports = banner.SportId;
      this.showBannerPreview = true;
    }
    this.isEditMode = !this.isEditMode;
  }

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
      ban.IdBanner = 0;//this.bannerId;
      ban.BannerCode = 'BAN102';
      ban.BannerType = this.ddlBannerType;
      ban.IdBook = 1;//Number(this.ddlBook);
      ban.BannerDescription = 'bla  bla bla bla';
      ban.IdLanguage = Number(this.ddlLanguages);
      ban.SportId = this.ddlSports;
      ban.ImageUrl = this.imgUrl;
      ban.TargetUrl = 'http://academiacostarica.com/';

      this.banners.push(ban);

      let t0 = performance.now();

      this.affiliateService.AddBanner(ban)
        .subscribe(response => {
          this.response = response;
          //  this.totals = this.calculateTotals(response);
          this.loading = false;

          // console.log(this.response);
          let t1 = performance.now();
          if (this.response > 0) {
            // this.toastr.success('Your banner has been created!', 'Success');
          }
          else {
            this.toastr.error('ERROR!', '-1');
          }
        },
        error => this.errorMessage = <any>error);


      this.resetform();
      this.isEditMode = false;

    }
    else {
      this.toastr.error('Please enter a valid image url', 'Error')
    } 
  }

  goBack() {
    this.resetform();
    this.isEditMode = false;
  }

  deactivateBanner() {
    alert('deactivate banner needs some code!');
  }


  onChangeBannerTypeFilter() {
    this.loading = true;
    this.bannersToDisplay = this.banners.filter(e => (e.BannerType === this.ddlBannerTypeFilter || this.ddlBannerTypeFilter === 'All')
      && (e.IdLanguage == +this.ddlLanguagesFilter || this.ddlLanguagesFilter === 'All')
      && (e.SportId === this.ddlSportsFilter || this.ddlSportsFilter === 'All')
      && (e.IdBook == +this.ddlBookFilter || this.ddlBookFilter === '0'))
    this.loading = false;


  }


  clearFilters() {
    this.bannersToDisplay = this.banners;
    this.ddlBannerTypeFilter = 'All'
    this.ddlBookFilter = '0'
    this.ddlSportsFilter = 'All'
    this.ddlLanguagesFilter = 'All'
  }

  test() {
    alert('vea la consola!');
    // console.log(this.uploader);


  }
  upload(item: any) {
    this.uploader.options.url = URL + this.ddlBook;
    if (this.ddlBannerType === 'Dynamic') {
      this.uploader.queue[0].file.name = this.ddlBook + '_DynamicBanner0001.jpg';
    }
    else {

    }
    item.upload();
    this.newImgUrl = 'http://panmora.com/twapi/images/' + this.ddlBook + '/' + this.uploader.queue[0]._file.name;
    // console.log(this.newImgUrl);
    this.imgUrl = this.newImgUrl;
    this.showBannerPreview = true;
  }

  resetform() {
    this.uploader.clearQueue();
    this.showBannerPreview = false;
    this.ddlBannerType = 'Static'
    this.ddlBook = 'Jazz'
    this.ddlSports = 'NFL'
    this.ddlLanguages = 'English'
    this.customSize = false;
    this.imgHeight = 250;
    this.imgWidth = 250;
    this.imgUrl = 'http:\\\\'
  }

  onBookChange() {
    //  // console.log(this.ddlBook);
    this.uploader.options.url = URL + this.ddlBook;
    this.targetUrl = this.books.find(e => e.value == this.ddlBook).url;
    // // console.log(this.uploader.options.url);

  }


  getLanguageName(id: string) {
    let lang = this.languages.find(e => e.value == id);
    if (lang) {
      return lang.display;
    }
    else {
      return 'Undefined';

    }

  }
}  //end of class
//////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'bannerfarm-modal',
  template: `
  <div (click)="hide()" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <ng-content select=".app-modal-header"></ng-content>
        </div>
        <div class="modal-body">
          <ng-content select=".app-modal-body"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select=".app-modal-footer"></ng-content>
        </div>
      </div>
    </div>
  </div>
  `
})
export class BannerModalComponent {

  public visible = false;
  private visibleAnimate = false;
  public code: string = '<>';


  // public code =  ` &lt;a href="http://stackoverflow.com/questions/2820453/display-html-code-in-html"&gt;
  //     &lt;img src="http://stackoverflow.com/questions/2820453/display-html-code-in-html.jpg"&gt;
  //     &lt;/a&gt; `


  public show(banner: Banner): void {
    this.visible = true;
    // console.log(banner);
    this.code = '<a href="' + banner.TargetUrl + '" ><img src="' + banner.ImageUrl + '"></a>';
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }


}
