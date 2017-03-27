/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermsOfServicePphComponent } from './terms-of-service-pph.component';

describe('TermsOfServiceComponent', () => {
  let component: TermsOfServicePphComponent;
  let fixture: ComponentFixture<TermsOfServicePphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfServicePphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfServicePphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
