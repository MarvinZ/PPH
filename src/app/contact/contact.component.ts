import { Component, OnInit } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends Localization implements OnInit {

      constructor(public locale: LocaleService, public translation: TranslationService) {
              super(locale, translation);

   }

  ngOnInit() {
  }

}
