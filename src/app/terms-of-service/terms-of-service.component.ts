import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

  constructor() { }

  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };

  ngOnInit() {
  }

}
