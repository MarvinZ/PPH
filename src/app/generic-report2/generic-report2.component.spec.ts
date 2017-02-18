/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericReport2Component } from './generic-report2.component';

describe('GenericReportComponent', () => {
  let component: GenericReport2Component;
  let fixture: ComponentFixture<GenericReport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericReport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
