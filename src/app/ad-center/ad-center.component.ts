import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, OnDestroy, Component } from '@angular/core';

import { AffiliateService } from './../services/affiliate.service'
import { AuthService } from '../user/auth.service'

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-ad-center',
  templateUrl: './ad-center.component.html',
  styleUrls: ['./ad-center.component.css']
})
export class AdCenterComponent implements OnInit {

  BannerCode: string;
  Affiliatecode: string;
  Book: string;
  ip: string

  response: any
  errorMessage: string

  constructor(private activatedRoute: ActivatedRoute, private affiliateService: AffiliateService, private auth: AuthService,
    private _http: Http) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.Book = params['book']; //bannerId ;param1=value1;param2=value2
      this.BannerCode = params['bannercode']; //bannerId ;param1=value1;param2=value2
      this.Affiliatecode = params['affiliatecode']; //bannerId ;param1=value1;param2=value2



      console.log([this.Book, this.BannerCode, this.Affiliatecode]);
      this.getIPAddress();
      this.addclick();

      //  this.goToSite(this.Book);
    });

    //this.activatedRoute.queryParams
  }

  addclick() {
    this.affiliateService.AddBannerClick(this.BannerCode, this.Affiliatecode)
      .subscribe(response => {
        this.response = response;
          console.log('Response:');

        console.log(response);
        //http://localhost:4200/adcenter;book=1;bannercode=GOKU;affiliatecode=LL101

      },
      error => {
        this.errorMessage = <any>error;
        console.log('ERRORRRRRR: ' + this.errorMessage);
      });
  }


  getIPAddress() {
    this._http.get("https://jsonip.com").subscribe(response => {
      this.response = response;
   //   console.log(this.response._body);
      let mmm = this.response._body.split(',');
      console.log(mmm[0].substring(7, mmm[0].length-1));


    }, error => {
      console.log('ERRORRRRRR: ' + this.errorMessage);

    });


  };


  goToSite(site: string) {
    //  alert(site); //add to counter
    switch (site) {
      case '19': {
        this.addclick();
        //    window.location.href = 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/';
        break;
      }
      case '4': {
        this.addclick();
        //       window.location.href = 'http://signup.abcislands.ag/abc_signupnew.aspx';
        break;
      }
      case '1': {
        this.addclick();
        //     window.location.href = 'http://signup.looselines.ag/ll_Signup.aspx';
        break;
      }
      default: {
        //statements; 
        this.addclick();
        //       window.location.href = 'http://signup.looselines.ag/ll_Signup.aspx';

        break;
      }
    }

  }

}



