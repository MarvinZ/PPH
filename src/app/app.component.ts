import { Component } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent extends Localization {


    constructor(public locale: LocaleService, public translation: TranslationService) {
        super(locale, translation);

        this.locale.AddConfiguration()
            .AddLanguages(['en', 'it', 'es', 'pt'])
            .SetCookieExpiration(30)
            .DefineDefaultLocale('en', 'US')
            .DefineCurrency('USD');
        this.locale.init();

        this.translation.AddConfiguration()
            .AddProvider('./assets/locale-');
        this.translation.init();
    }

    selectLocale(language: string, country: string, currency: string): void {
        this.locale.setDefaultLocale(language, country);
        this.locale.setCurrentCurrency(currency);
    }

}