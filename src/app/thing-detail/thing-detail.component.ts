import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IThing } from './../models/thing';
import { ThingService } from './../services/thing.service';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.css']
})
export class ThingDetailComponent extends Localization  implements OnInit, OnDestroy {
  pageTitle: string = 'thing Detail';
    thing: IThing;
    errorMessage: string;
    private sub: Subscription;
  constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _thingService: ThingService, public locale: LocaleService, public translation: TranslationService) 
                              
{super(locale, translation); }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getThing(id);
        });
  }

  ngOnDestroy() {
        this.sub.unsubscribe();
    }

      getThing(id: number) {
        this.thing =     {
        "thingId": id,
        "thingName": "Garden Cart",
        "thingCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
        // this._thingService.getThing(id).subscribe(
        //     thing => this.thing = thing,
        //     error => this.errorMessage = <any>error);
    }

      onBack(): void {
        this._router.navigate(['/things']);
    }

}
