import { Component, OnInit } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { AuthService } from '../user/auth.service'
import { IPlayer } from './../models/player';
import { ReportService } from './../services/report.service';


@Component({
  selector: 'app-generic-report',
  templateUrl: './generic-report.component.html',
  styleUrls: ['./generic-report.component.css']
})
export class GenericReportComponent   extends Localization implements OnInit {
   players: IPlayer[];
   errorMessage: string;


   constructor(private _reportService: ReportService, private auth: AuthService, public locale: LocaleService, public translation: TranslationService) {
        super(locale, translation);
   }

   ngOnInit(): void {
        this._reportService.getPlayerNumbers()
                .subscribe(things => this.players = things,
                           error => this.errorMessage = <any>error);
    }

    switchEditMode (id:number) {
      this.players[id].isEditMode = !this.players[id].isEditMode;
    }

    SaveChanges (player: IPlayer) {    
      alert("Saved, but saved.. player: " + player.playerAccountNumber);
      this.players[player.playerId].isEditMode = true;
    }
    SwitchPlayerStatus (id:number) {
     this.players[id].isActive = !this.players[id].isActive;    
     alert("Suspended, or unsuspended, who knows?  player id: " + this.players[id].playerId);
    }

    

}
