/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangedWagersComponent } from './changed-wagers.component';

describe('ChangedWagersComponent', () => {
  let component: ChangedWagersComponent;
  let fixture: ComponentFixture<ChangedWagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedWagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedWagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
