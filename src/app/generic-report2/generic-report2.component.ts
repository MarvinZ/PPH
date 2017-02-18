import { Component, OnInit } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'app-generic-report2',
  templateUrl: './generic-report2.component.html',
  styleUrls: ['./generic-report2.component.css']
})
export class GenericReport2Component   extends Localization implements OnInit {

   constructor(private auth: AuthService, public locale: LocaleService, public translation: TranslationService) {
        super(locale, translation);
   }

  ngOnInit() {
  }

}
