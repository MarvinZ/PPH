/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WagerListingComponent } from './wager-listing.component';

describe('WagerListingComponent', () => {
  let component: WagerListingComponent;
  let fixture: ComponentFixture<WagerListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagerListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
