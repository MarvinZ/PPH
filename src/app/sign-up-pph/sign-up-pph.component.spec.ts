/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignUpPphComponent } from './sign-up-pph.component';

describe('SignUpPphComponent', () => {
  let component: SignUpPphComponent;
  let fixture: ComponentFixture<SignUpPphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
