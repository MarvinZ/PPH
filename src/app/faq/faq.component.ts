import { Component, OnInit } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent extends Localization implements OnInit {

    constructor(public locale: LocaleService, public translation: TranslationService) {
              super(locale, translation);

   }

  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
 
  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };
 
  public groups: any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
 
  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }


  ngOnInit() {
  }

}
