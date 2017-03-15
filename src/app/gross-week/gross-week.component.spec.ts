/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrossWeekComponent } from './gross-week.component';

describe('GrossWeekComponent', () => {
  let component: GrossWeekComponent;
  let fixture: ComponentFixture<GrossWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
