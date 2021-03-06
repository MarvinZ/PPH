import { Component, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { ReportResponse } from './../models/api';
import { AffiliateService } from './../services/affiliate.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { IMyOptions } from 'mydatepicker';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { Banner } from './../models/banner';
import { AppSettings } from '../app-settings';



@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent extends Localization implements OnInit {
  @ViewChild('MarketingModalComponent')
  public readonly modal: MarketingModalComponent
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  //	private dateModel: any
  loading: boolean = false;

  domain: string = AppSettings.ADCENTER;


  ddlBannerTypeFilter: string = 'All'
  ddlBookFilter: string = 'All'
  ddlSportsFilter: string = 'All'
  ddlLanguagesFilter: string = 'All'

  bannerTypesFilter: any = []
  languagesFilter: any = []
  booksFilter: any = []
  sportsfilter: any = []

  isCopied1: boolean = false;


  public bannerTypes = [
    { value: 'STATIC', display: 'Static' },
    { value: 'DYNAMIC', display: 'Dynamic' },

  ];

  public languages = [
    { value: '0', display: 'English' },
    { value: '1', display: 'Español' }
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

    this.bannersToDisplay = this.banners;

    this.sportsfilter = this.sports.slice();
    this.sportsfilter.push({ value: 'All', display: 'All' });

    this.booksFilter = this.books.slice();
    this.booksFilter.push({ value: 'All', display: 'All' });

    this.languagesFilter = this.languages.slice();
    this.languagesFilter.push({ value: 'All', display: 'All' });

    this.bannerTypesFilter = this.bannerTypes.slice();
    this.bannerTypesFilter.push({ value: 'All', display: 'All' });

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


  onChangeBannerTypeFilter() {
    this.loading = true;
    this.bannersToDisplay = this.banners.filter(e => (e.BannerType === this.ddlBannerTypeFilter || this.ddlBannerTypeFilter === 'All')
      && (e.IdLanguage == +this.ddlLanguagesFilter || this.ddlLanguagesFilter === 'All')
      && (e.SportId === this.ddlSportsFilter || this.ddlSportsFilter === 'All'))
    this.loading = false;

  }


  clearFilters() {
    this.bannersToDisplay = this.banners;
    this.ddlBannerTypeFilter = 'All'
    this.ddlBookFilter = 'All'
    this.ddlSportsFilter = 'All'
    this.ddlLanguagesFilter = 'All'
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


}//end of class


@Component({
  selector: 'marketing-modal',
  template: `
  <div class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
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
export class MarketingModalComponent {

  constructor(private auth: AuthService) {

  }
  domain: string = AppSettings.ADCENTER;


  public visible = false;
  private visibleAnimate = false;
  public code: string = '<>';
  public codeHTTP: string = '<>';
  public codeHTTPS: string = '<>';

  public languages = [
    { value: '0', display: 'English' },
    { value: '1', display: 'Español' }
  ];



  // public code =  ` &lt;a href="http://stackoverflow.com/questions/2820453/display-html-code-in-html"&gt;
  //     &lt;img src="http://stackoverflow.com/questions/2820453/display-html-code-in-html.jpg"&gt;
  //     &lt;/a&gt; `


  public show(banner: Banner): void {
    this.visible = true;
    // console.log(banner);
    this.codeHTTP = '<a href="http://' + this.domain + 'adcenter;book=' + this.auth.currentUser.bookId + ';bannercode=' + banner.BannerCode + ';affiliatecode=' + this.auth.currentUser.affCode + '" ><img src="' + banner.ImageUrl + '"></a>';
    this.codeHTTPS = '<a href="https://' + this.domain + 'adcenter;book=' + this.auth.currentUser.bookId + ';bannercode=' + banner.BannerCode + ';affiliatecode=' + this.auth.currentUser.affCode + '" ><img src="' + banner.ImageUrl.slice(0, 4) + 's' + banner.ImageUrl.slice(4); + '"></a>';
    this.code = this.codeHTTP;

    // + /*banner.TargetUrl*/ 'http://signup.looselines.ag/ll_Signup.aspx?AffCode='+this.auth.currentUser.affCode+'&BannerCode='+banner.BannerCode+ '" ><img src="' + banner.ImageUrl + '"></a>';
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  copyHTML(code: string) {
    alert(code);
  }
  onChange(event) {
    if (this.code === this.codeHTTPS) {
      this.code = this.codeHTTP;
    }
    else {
      this.code = this.codeHTTPS;
    }


  }



} //end of class
