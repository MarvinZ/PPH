import { Component, OnInit } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent extends Localization implements OnInit {
     constructor(public locale: LocaleService, public translation: TranslationService) {
              super(locale, translation);

   }

  ngOnInit() {
  }

}
