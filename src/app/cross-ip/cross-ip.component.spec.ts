/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrossIpComponent } from './cross-ip.component';

describe('CrossIpComponent', () => {
  let component: CrossIpComponent;
  let fixture: ComponentFixture<CrossIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
