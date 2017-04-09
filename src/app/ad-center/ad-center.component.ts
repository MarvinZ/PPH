import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, OnDestroy, Component} from '@angular/core';

@Component({
  selector: 'app-ad-center',
  templateUrl: './ad-center.component.html',
  styleUrls: ['./ad-center.component.css']
})
export class AdCenterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        let site = params['site']; //bannerId ;param1=value1;param2=value2
        console.log(site);
        this.goToSite(site);
      });

      //this.activatedRoute.queryParams
  }


  goToSite(site: string) {
  //  alert(site); //add to counter
    switch (site) {
      case 'jazz': {
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
        break;
      }
    }

  }

}
