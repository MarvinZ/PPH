import { Component, OnInit } from '@angular/core';
import { IThing } from './../models/thing';
import { ThingService } from './../services/thing.service';

import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent extends Localization implements OnInit {
    pageTitle: string = 'Thing List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    things: IThing[];

  constructor(private _thingService: ThingService, public locale: LocaleService, public translation: TranslationService) {
              super(locale, translation);

   }

 toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._thingService.getThings()
                .subscribe(things => this.things = things,
                           error => this.errorMessage = <any>error);
    }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Thing List: ' + message;
    // }

}
