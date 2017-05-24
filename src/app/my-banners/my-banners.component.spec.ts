/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyBannersComponent } from './my-banners.component';

describe('MarketingComponent', () => {
  let component: MyBannersComponent;
  let fixture: ComponentFixture<MyBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
