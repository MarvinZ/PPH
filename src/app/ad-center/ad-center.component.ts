import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, OnDestroy, Component } from '@angular/core';

import { AffiliateService } from './../services/affiliate.service'
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'app-ad-center',
  templateUrl: './ad-center.component.html',
  styleUrls: ['./ad-center.component.css']
})
export class AdCenterComponent implements OnInit {

  BannerCode: string;
  Affiliatecode: string;
  Site: string;

  response: any
  errorMessage: string

  constructor(private activatedRoute: ActivatedRoute, private affiliateService: AffiliateService, private auth: AuthService) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.Site = params['site']; //bannerId ;param1=value1;param2=value2
      this.BannerCode = params['bannercode']; //bannerId ;param1=value1;param2=value2
      this.Affiliatecode = params['affiliatecode']; //bannerId ;param1=value1;param2=value2



      console.log(this.Site);
      this.goToSite(this.Site);
    });

    //this.activatedRoute.queryParams
  }


  goToSite(site: string) {
    //  alert(site); //add to counter
    switch (site) {
      case 'jazz': {
        this.affiliateService.AddBannerClick(this.BannerCode, this.Affiliatecode)
          .subscribe(response => {
            this.response = response;

            // console.log(this.response);
          },
          error => this.errorMessage = <any>error);
        window.location.href = 'http://signup.jazzsports.ag/signupjazz.aspx?prefix=CJ&siteID=300&store_id=2&aff=&banner=&campaign=&se=GOOGLE&sks=/&ru=https://www.google.com/';
        break;
      }
      case 'abc': {
        window.location.href = 'http://signup.abcislands.ag/abc_signupnew.aspx';
        break;
      }
      case 'looselines': {
        window.location.href = 'http://signup.looselines.ag/ll_Signup.aspx';
        break;
      }
      default: {
        //statements; 
        window.location.href = 'http://signup.looselines.ag/ll_Signup.aspx';

        break;
      }
    }

  }

}
