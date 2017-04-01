/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerFarmComponent } from './banner-farm.component';

describe('BannerFarmComponent', () => {
  let component: BannerFarmComponent;
  let fixture: ComponentFixture<BannerFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
