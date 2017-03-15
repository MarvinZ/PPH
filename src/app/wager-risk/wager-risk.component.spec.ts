/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WagerRiskComponent } from './wager-risk.component';

describe('WagerRiskComponent', () => {
  let component: WagerRiskComponent;
  let fixture: ComponentFixture<WagerRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagerRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
