/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettledFiguresComponent } from './settled-figures.component';

describe('SettledFiguresComponent', () => {
  let component: SettledFiguresComponent;
  let fixture: ComponentFixture<SettledFiguresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettledFiguresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettledFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
